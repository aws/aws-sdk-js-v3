import { Handler, SerializeHandlerArguments } from "@aws-sdk/types";

export const validateBucketName = (
  next: Handler<any, any>
): Handler<any, any> => async (args: SerializeHandlerArguments<any, any>) => {
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
