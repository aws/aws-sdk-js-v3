import { DeleteNotificationConfigurationInput } from "./DeleteNotificationConfigurationInput";
import { DeleteNotificationConfigurationOutput } from "./DeleteNotificationConfigurationOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteNotificationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNotificationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNotificationConfigurationInput
  },
  output: {
    shape: DeleteNotificationConfigurationOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
