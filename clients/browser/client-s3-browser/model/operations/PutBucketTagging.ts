import { PutBucketTaggingInput } from "../shapes/PutBucketTaggingInput";
import { PutBucketTaggingOutput } from "../shapes/PutBucketTaggingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketTagging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketTagging",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?tagging"
  },
  input: {
    shape: PutBucketTaggingInput
  },
  output: {
    shape: PutBucketTaggingOutput
  },
  errors: []
};
