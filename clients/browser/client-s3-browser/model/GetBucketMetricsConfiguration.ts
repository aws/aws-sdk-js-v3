import { GetBucketMetricsConfigurationInput } from "./GetBucketMetricsConfigurationInput";
import { GetBucketMetricsConfigurationOutput } from "./GetBucketMetricsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBucketMetricsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketMetricsConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?metrics"
  },
  input: {
    shape: GetBucketMetricsConfigurationInput
  },
  output: {
    shape: GetBucketMetricsConfigurationOutput
  },
  errors: []
};
