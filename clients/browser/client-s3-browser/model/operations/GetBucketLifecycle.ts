import { GetBucketLifecycleInput } from "../shapes/GetBucketLifecycleInput";
import { GetBucketLifecycleOutput } from "../shapes/GetBucketLifecycleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketLifecycle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketLifecycle",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?lifecycle"
  },
  input: {
    shape: GetBucketLifecycleInput
  },
  output: {
    shape: GetBucketLifecycleOutput
  },
  errors: []
};
