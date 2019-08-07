import { GetBucketLifecycleConfigurationInput } from "./GetBucketLifecycleConfigurationInput";
import { GetBucketLifecycleConfigurationOutput } from "./GetBucketLifecycleConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBucketLifecycleConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketLifecycleConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?lifecycle"
  },
  input: {
    shape: GetBucketLifecycleConfigurationInput
  },
  output: {
    shape: GetBucketLifecycleConfigurationOutput
  },
  errors: []
};
