import { PutBackupVaultNotificationsInput } from "./PutBackupVaultNotificationsInput";
import { PutBackupVaultNotificationsOutput } from "./PutBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutBackupVaultNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBackupVaultNotifications",
  http: {
    method: "PUT",
    requestUri: "/backup-vaults/{backupVaultName}/notification-configuration"
  },
  input: {
    shape: PutBackupVaultNotificationsInput
  },
  output: {
    shape: PutBackupVaultNotificationsOutput
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
