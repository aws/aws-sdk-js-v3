import { DeleteVaultNotificationsInput } from "./DeleteVaultNotificationsInput";
import { DeleteVaultNotificationsOutput } from "./DeleteVaultNotificationsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
