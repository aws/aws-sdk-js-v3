import { GetBackupVaultNotificationsInput } from "./GetBackupVaultNotificationsInput";
import { GetBackupVaultNotificationsOutput } from "./GetBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBackupVaultNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBackupVaultNotifications",
  http: {
    method: "GET",
    requestUri: "/backup-vaults/{backupVaultName}/notification-configuration"
  },
  input: {
    shape: GetBackupVaultNotificationsInput
  },
  output: {
    shape: GetBackupVaultNotificationsOutput
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
