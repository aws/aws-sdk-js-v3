import type { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { formatUrl } from "@aws-sdk/core/util";
import type { EndpointParameterInstructionsSupplier } from "@smithy/core/endpoints";
import { getEndpointFromInstructions, toEndpointV1 } from "@smithy/core/endpoints";
import { toHex, toUint8Array } from "@smithy/core/serde";
import { createScope, getSigningKey } from "@smithy/signature-v4";
import type { ChecksumConstructor, HashConstructor, SourceData } from "@smithy/types";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  SIGNATURE_QUERY_PARAM,
  TOKEN_QUERY_PARAM,
} from "./constants";
import type { Conditions as PolicyEntry } from "./types";

type Fields = Record<string, string>;

export interface PresignedPostOptions {
  Bucket: string;
  Key: string;
  Conditions?: PolicyEntry[];
  Fields?: Fields;
  Expires?: number;
}

export interface PresignedPost {
  url: string;
  fields: Fields;
}

/**
 * Builds the url and the form fields used for a presigned s3 post.
 */
export const createPresignedPost = async (
  client: S3Client,
  { Bucket, Key, Conditions = [], Fields = {}, Expires = 3600 }: PresignedPostOptions
): Promise<PresignedPost> => {
  const { systemClockOffset, base64Encoder, utf8Decoder, sha256 } = client.config;
  const now = new Date(Date.now() + systemClockOffset);

  // signingDate in format like '20201028T070711Z'.
  const signingDate = iso8601(now).replace(/[\-:]/g, "");
  const shortDate = signingDate.slice(0, 8);
  const clientRegion = await client.config.region();

  // Prepare credentials.
  const credentialScope = createScope(shortDate, clientRegion, "s3");
  const clientCredentials = await client.config.credentials();
  const credential = `${clientCredentials.accessKeyId}/${credentialScope}`;

  const fields: Fields = {
    ...Fields,
    bucket: Bucket,
    [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
    [CREDENTIAL_QUERY_PARAM]: credential,
    [AMZ_DATE_QUERY_PARAM]: signingDate,
    ...(clientCredentials.sessionToken ? { [TOKEN_QUERY_PARAM]: clientCredentials.sessionToken } : {}),
  };

  // Prepare policies.
  const expiration = new Date(now.valueOf() + Expires * 1000);

  const conditionsSet = new Set<string>();

  for (const condition of Conditions) {
    const stringifiedCondition = JSON.stringify(condition);
    conditionsSet.add(stringifiedCondition);
  }

  // Per S3 docs, any form field value can contain the `${filename}` variable, which S3 substitutes
  // with the uploaded file's name at request time. An exact-match policy condition for such a field
  // would be invalidated by that substitution, so emit a `starts-with` condition keyed off the
  // prefix that precedes `${filename}` instead.
  // See: https://docs.aws.amazon.com/AmazonS3/latest/userguide/HTTPPOSTForms.html#HTTPPOSTFormFields
  const FILENAME_PLACEHOLDER = "${filename}";
  const addFieldCondition = (name: string, value: string) => {
    const placeholderIndex = value.indexOf(FILENAME_PLACEHOLDER);
    if (placeholderIndex !== -1) {
      conditionsSet.add(JSON.stringify(["starts-with", `$${name}`, value.substring(0, placeholderIndex)]));
    } else {
      conditionsSet.add(JSON.stringify({ [name]: value }));
    }
  };

  for (const [k, v] of Object.entries(fields)) {
    addFieldCondition(k, v);
  }

  addFieldCondition("key", Key);

  const conditions = Array.from(conditionsSet).map((item) => JSON.parse(item));

  const encodedPolicy = base64Encoder(
    utf8Decoder(
      JSON.stringify({
        expiration: iso8601(expiration),
        conditions,
      })
    )
  );

  // Sign the request.
  const signingKey = await getSigningKey(sha256, clientCredentials, shortDate, clientRegion, "s3");
  const signature = await hmac(sha256, signingKey, encodedPolicy);

  const endpoint = toEndpointV1(
    await getEndpointFromInstructions(
      { Bucket, Key },
      PutObjectCommand as EndpointParameterInstructionsSupplier,
      {
        ...client.config,
      },
      {
        logger: client.config.logger,
      }
    )
  );

  return {
    url: formatUrl(endpoint),
    fields: {
      ...fields,
      key: Key,
      Policy: encodedPolicy,
      [SIGNATURE_QUERY_PARAM]: toHex(signature),
    },
  };
};

const iso8601 = (date: Date) => date.toISOString().replace(/\.\d{3}Z$/, "Z");

const hmac = (
  ctor: ChecksumConstructor | HashConstructor,
  secret: SourceData,
  data: SourceData
): Promise<Uint8Array> => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
};
