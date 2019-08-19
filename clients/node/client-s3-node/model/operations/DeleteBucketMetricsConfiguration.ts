import { DeleteBucketMetricsConfigurationInput } from "../shapes/DeleteBucketMetricsConfigurationInput";
import { DeleteBucketMetricsConfigurationOutput } from "../shapes/DeleteBucketMetricsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketMetricsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketMetricsConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?metrics"
  },
  input: {
    shape: DeleteBucketMetricsConfigurationInput
  },
  output: {
    shape: DeleteBucketMetricsConfigurationOutput
  },
  errors: []
};
