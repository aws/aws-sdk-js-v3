import { AwsCredentialIdentity } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { HttpRequest } from "@smithy/protocol-http";
import { parseRfc3339DateTime } from "@smithy/smithy-client";
import { HttpResponse, Logger } from "@smithy/types";
import { sdkStreamMixin } from "@smithy/util-stream";

import { HttpProviderCredentials } from "./fromHttpTypes";

/**
 * @internal
 */
export function createGetRequest(url: URL): HttpRequest {
  return new HttpRequest({
    protocol: url.protocol,
    hostname: url.hostname,
    port: Number(url.port),
    path: url.pathname,
    query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
      acc[k] = v;
      return acc;
    }, {} as Record<string, string>),
    fragment: url.hash,
  });
}

/**
 * @internal
 */
export async function getCredentials(response: HttpResponse, logger?: Logger): Promise<AwsCredentialIdentity> {
  const stream = sdkStreamMixin(response.body);
  const str = await stream.transformToString();

  if (response.statusCode === 200) {
    const parsed: HttpProviderCredentials = JSON.parse(str);

    if (
      typeof parsed.AccessKeyId !== "string" ||
      typeof parsed.SecretAccessKey !== "string" ||
      typeof parsed.Token !== "string" ||
      typeof parsed.Expiration !== "string"
    ) {
      throw new CredentialsProviderError(
        "HTTP credential provider response not of the required format, an object matching: " +
          "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }",
        { logger }
      );
    }

    return {
      accessKeyId: parsed.AccessKeyId,
      secretAccessKey: parsed.SecretAccessKey,
      sessionToken: parsed.Token,
      expiration: parseRfc3339DateTime(parsed.Expiration),
    };
  }
  if (response.statusCode >= 400 && response.statusCode < 500) {
    let parsedBody: { Code?: string; Message?: string } = {};
    try {
      parsedBody = JSON.parse(str);
    } catch (e) {}

    throw Object.assign(
      new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger }),
      {
        Code: parsedBody.Code,
        Message: parsedBody.Message,
      }
    );
  }
  throw new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger });
}
