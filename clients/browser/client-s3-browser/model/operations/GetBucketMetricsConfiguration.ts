import { GetBucketMetricsConfigurationInput } from "../shapes/GetBucketMetricsConfigurationInput";
import { GetBucketMetricsConfigurationOutput } from "../shapes/GetBucketMetricsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
