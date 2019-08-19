import { PutBucketLifecycleInput } from "../shapes/PutBucketLifecycleInput";
import { PutBucketLifecycleOutput } from "../shapes/PutBucketLifecycleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketLifecycle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketLifecycle",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?lifecycle"
  },
  input: {
    shape: PutBucketLifecycleInput
  },
  output: {
    shape: PutBucketLifecycleOutput
  },
  errors: []
};
