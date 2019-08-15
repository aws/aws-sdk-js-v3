import { DeleteBucketLifecycleInput } from "../shapes/DeleteBucketLifecycleInput";
import { DeleteBucketLifecycleOutput } from "../shapes/DeleteBucketLifecycleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketLifecycle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketLifecycle",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?lifecycle"
  },
  input: {
    shape: DeleteBucketLifecycleInput
  },
  output: {
    shape: DeleteBucketLifecycleOutput
  },
  errors: []
};
