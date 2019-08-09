import { PutBucketNotificationInput } from "./PutBucketNotificationInput";
import { PutBucketNotificationOutput } from "./PutBucketNotificationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutBucketNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketNotification",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?notification"
  },
  input: {
    shape: PutBucketNotificationInput
  },
  output: {
    shape: PutBucketNotificationOutput
  },
  errors: []
};
