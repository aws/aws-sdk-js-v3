import { SetIdentityNotificationTopicInput } from "../shapes/SetIdentityNotificationTopicInput";
import { SetIdentityNotificationTopicOutput } from "../shapes/SetIdentityNotificationTopicOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIdentityNotificationTopic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityNotificationTopic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIdentityNotificationTopicInput
  },
  output: {
    shape: SetIdentityNotificationTopicOutput,
    resultWrapper: "SetIdentityNotificationTopicResult"
  },
  errors: []
};
