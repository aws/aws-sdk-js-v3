import { DeleteVaultNotificationsInput } from "../shapes/DeleteVaultNotificationsInput";
import { DeleteVaultNotificationsOutput } from "../shapes/DeleteVaultNotificationsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVaultNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVaultNotifications",
  http: {
    method: "DELETE",
    requestUri: "/{accountId}/vaults/{vaultName}/notification-configuration"
  },
  input: {
    shape: DeleteVaultNotificationsInput
  },
  output: {
    shape: DeleteVaultNotificationsOutput
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
