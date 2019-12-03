import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";

export function validateBucketNameMiddleware(): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const { input } = args;
    if (typeof input.Bucket === "string" && input.Bucket.indexOf("/") >= 0) {
      const err = new Error(
        `Bucket name shouldn't contain '/', received '${input.Bucket}'`
      );
      err.name = "InvalidBucketName";
      throw err;
    }
    return next({ ...args });
  };
}

export const validateBucketNameMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware"
};

export const getValidateBucketNamePlugin = (
  unused: any
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      validateBucketNameMiddleware(),
      validateBucketNameMiddlewareOptions
    );
  }
});
