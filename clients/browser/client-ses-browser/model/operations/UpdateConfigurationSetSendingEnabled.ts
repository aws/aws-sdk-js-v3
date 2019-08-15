import { UpdateConfigurationSetSendingEnabledInput } from "../shapes/UpdateConfigurationSetSendingEnabledInput";
import { UpdateConfigurationSetSendingEnabledOutput } from "../shapes/UpdateConfigurationSetSendingEnabledOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfigurationSetSendingEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationSetSendingEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConfigurationSetSendingEnabledInput
  },
  output: {
    shape: UpdateConfigurationSetSendingEnabledOutput
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    }
  ]
};
