import { GetBucketTaggingInput } from "../shapes/GetBucketTaggingInput";
import { GetBucketTaggingOutput } from "../shapes/GetBucketTaggingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketTagging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketTagging",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?tagging"
  },
  input: {
    shape: GetBucketTaggingInput
  },
  output: {
    shape: GetBucketTaggingOutput
  },
  errors: []
};
