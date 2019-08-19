import { PutNotificationConfigurationInput } from "../shapes/PutNotificationConfigurationInput";
import { PutNotificationConfigurationOutput } from "../shapes/PutNotificationConfigurationOutput";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
