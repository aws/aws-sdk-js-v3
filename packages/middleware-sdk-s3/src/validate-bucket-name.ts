import { validate as validateArn } from "@aws-sdk/util-arn-parser";
import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

import { bucketEndpointMiddleware, bucketEndpointMiddlewareOptions } from "./bucket-endpoint-middleware";
import { S3ResolvedConfig } from "./s3Configuration";

/**
 * @internal
 */
export function validateBucketNameMiddleware({ bucketEndpoint }: S3ResolvedConfig): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const {
        input: { Bucket },
      } = args;
      if (!bucketEndpoint && typeof Bucket === "string" && !validateArn(Bucket) && Bucket.indexOf("/") >= 0) {
        const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
        err.name = "InvalidBucketName";
        throw err;
      }
      return next({ ...args });
    };
}

/**
 * @internal
 */
export const validateBucketNameMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true,
};

/**
 * @internal
 */
export const getValidateBucketNamePlugin = (options: S3ResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  },
});
