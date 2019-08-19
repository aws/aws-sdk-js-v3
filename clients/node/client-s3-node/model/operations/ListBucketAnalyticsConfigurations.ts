import { ListBucketAnalyticsConfigurationsInput } from "../shapes/ListBucketAnalyticsConfigurationsInput";
import { ListBucketAnalyticsConfigurationsOutput } from "../shapes/ListBucketAnalyticsConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBucketAnalyticsConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBucketAnalyticsConfigurations",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?analytics"
  },
  input: {
    shape: ListBucketAnalyticsConfigurationsInput
  },
  output: {
    shape: ListBucketAnalyticsConfigurationsOutput
  },
  errors: []
};
