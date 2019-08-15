import { PutBucketNotificationConfigurationInput } from "../shapes/PutBucketNotificationConfigurationInput";
import { PutBucketNotificationConfigurationOutput } from "../shapes/PutBucketNotificationConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketNotificationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketNotificationConfiguration",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?notification"
  },
  input: {
    shape: PutBucketNotificationConfigurationInput
  },
  output: {
    shape: PutBucketNotificationConfigurationOutput
  },
  errors: []
};
