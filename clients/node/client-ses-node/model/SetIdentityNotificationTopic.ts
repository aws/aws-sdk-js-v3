import { SetIdentityNotificationTopicInput } from "./SetIdentityNotificationTopicInput";
import { SetIdentityNotificationTopicOutput } from "./SetIdentityNotificationTopicOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
