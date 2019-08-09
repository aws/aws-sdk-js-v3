import { PutBucketLoggingInput } from "./PutBucketLoggingInput";
import { PutBucketLoggingOutput } from "./PutBucketLoggingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutBucketLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketLogging",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?logging"
  },
  input: {
    shape: PutBucketLoggingInput
  },
  output: {
    shape: PutBucketLoggingOutput
  },
  errors: []
};
