import { DeleteBucketInput } from "../shapes/DeleteBucketInput";
import { DeleteBucketOutput } from "../shapes/DeleteBucketOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucket: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucket",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}"
  },
  input: {
    shape: DeleteBucketInput
  },
  output: {
    shape: DeleteBucketOutput
  },
  errors: []
};
