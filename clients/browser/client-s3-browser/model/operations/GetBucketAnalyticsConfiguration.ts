import { GetBucketAnalyticsConfigurationInput } from "../shapes/GetBucketAnalyticsConfigurationInput";
import { GetBucketAnalyticsConfigurationOutput } from "../shapes/GetBucketAnalyticsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketAnalyticsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketAnalyticsConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?analytics"
  },
  input: {
    shape: GetBucketAnalyticsConfigurationInput
  },
  output: {
    shape: GetBucketAnalyticsConfigurationOutput
  },
  errors: []
};
