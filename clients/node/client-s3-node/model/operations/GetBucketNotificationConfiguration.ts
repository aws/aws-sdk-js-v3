import { GetBucketNotificationConfigurationInput } from "../shapes/GetBucketNotificationConfigurationInput";
import { GetBucketNotificationConfigurationOutput } from "../shapes/GetBucketNotificationConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketNotificationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketNotificationConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?notification"
  },
  input: {
    shape: GetBucketNotificationConfigurationInput
  },
  output: {
    shape: GetBucketNotificationConfigurationOutput
  },
  errors: []
};
