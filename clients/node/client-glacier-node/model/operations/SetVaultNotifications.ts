import { SetVaultNotificationsInput } from "../shapes/SetVaultNotificationsInput";
import { SetVaultNotificationsOutput } from "../shapes/SetVaultNotificationsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetVaultNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetVaultNotifications",
  http: {
    method: "PUT",
    requestUri: "/{accountId}/vaults/{vaultName}/notification-configuration"
  },
  input: {
    shape: SetVaultNotificationsInput
  },
  output: {
    shape: SetVaultNotificationsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
