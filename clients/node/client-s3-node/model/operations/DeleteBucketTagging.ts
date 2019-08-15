import { DeleteBucketTaggingInput } from "../shapes/DeleteBucketTaggingInput";
import { DeleteBucketTaggingOutput } from "../shapes/DeleteBucketTaggingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketTagging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketTagging",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?tagging"
  },
  input: {
    shape: DeleteBucketTaggingInput
  },
  output: {
    shape: DeleteBucketTaggingOutput
  },
  errors: []
};
