import { EndpointParameters, HandlerExecutionContext, SerializeHandlerArguments } from "@aws-sdk/types";

import { getEndpointFromInstructions } from "../adaptors";
import { PreviouslyResolvedServiceId } from "../endpointMiddleware";
import { EndpointResolvedConfig } from "../resolveEndpointConfig";
import { EndpointParameterInstructions } from "../types";

/**
 * Bucket name DNS compatibility customization.
 */
export const s3Customizations = async <T extends EndpointParameters>(
  config: EndpointResolvedConfig<T> & PreviouslyResolvedServiceId,
  instructions: EndpointParameterInstructions,
  args: SerializeHandlerArguments<any>,
  context: HandlerExecutionContext
) => {
  const endpoint = context.endpointV2;
  const bucket: string | undefined = args.input?.Bucket || void 0;

  if (!endpoint || !bucket) {
    return;
  }

  if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1) {
    context.endpointV2 = await getEndpointFromInstructions(
      args.input,
      {
        getEndpointParameterInstructions: () => instructions,
      },
      { ...config, forcePathStyle: true }
    );
  }
};

const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
export const DOT_PATTERN = /\./;
export const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;

/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export const isDnsCompatibleBucketName = (bucketName: string): boolean =>
  DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
