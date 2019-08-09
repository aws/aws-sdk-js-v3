import { DeleteBackupVaultNotificationsInput } from "./DeleteBackupVaultNotificationsInput";
import { DeleteBackupVaultNotificationsOutput } from "./DeleteBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
