import { GetBucketLoggingInput } from "./GetBucketLoggingInput";
import { GetBucketLoggingOutput } from "./GetBucketLoggingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBucketLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketLogging",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?logging"
  },
  input: {
    shape: GetBucketLoggingInput
  },
  output: {
    shape: GetBucketLoggingOutput
  },
  errors: []
};
