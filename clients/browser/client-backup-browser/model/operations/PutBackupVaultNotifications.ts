import { PutBackupVaultNotificationsInput } from "../shapes/PutBackupVaultNotificationsInput";
import { PutBackupVaultNotificationsOutput } from "../shapes/PutBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
