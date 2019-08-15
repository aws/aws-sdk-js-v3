import { PutBucketAnalyticsConfigurationInput } from "../shapes/PutBucketAnalyticsConfigurationInput";
import { PutBucketAnalyticsConfigurationOutput } from "../shapes/PutBucketAnalyticsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketAnalyticsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketAnalyticsConfiguration",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?analytics"
  },
  input: {
    shape: PutBucketAnalyticsConfigurationInput
  },
  output: {
    shape: PutBucketAnalyticsConfigurationOutput
  },
  errors: []
};
