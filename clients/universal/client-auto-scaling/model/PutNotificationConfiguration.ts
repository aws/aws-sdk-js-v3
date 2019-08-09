import { PutNotificationConfigurationInput } from "./PutNotificationConfigurationInput";
import { PutNotificationConfigurationOutput } from "./PutNotificationConfigurationOutput";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutNotificationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutNotificationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutNotificationConfigurationInput
  },
  output: {
    shape: PutNotificationConfigurationOutput
  },
  errors: [
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
