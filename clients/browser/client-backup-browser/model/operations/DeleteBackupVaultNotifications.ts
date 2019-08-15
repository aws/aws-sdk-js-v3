import { DeleteBackupVaultNotificationsInput } from "../shapes/DeleteBackupVaultNotificationsInput";
import { DeleteBackupVaultNotificationsOutput } from "../shapes/DeleteBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBackupVaultNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackupVaultNotifications",
  http: {
    method: "DELETE",
    requestUri: "/backup-vaults/{backupVaultName}/notification-configuration"
  },
  input: {
    shape: DeleteBackupVaultNotificationsInput
  },
  output: {
    shape: DeleteBackupVaultNotificationsOutput
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
