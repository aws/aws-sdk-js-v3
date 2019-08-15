import { PutBucketMetricsConfigurationInput } from "../shapes/PutBucketMetricsConfigurationInput";
import { PutBucketMetricsConfigurationOutput } from "../shapes/PutBucketMetricsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketMetricsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketMetricsConfiguration",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?metrics"
  },
  input: {
    shape: PutBucketMetricsConfigurationInput
  },
  output: {
    shape: PutBucketMetricsConfigurationOutput
  },
  errors: []
};
