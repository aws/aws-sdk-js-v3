import { GetBackupVaultNotificationsInput } from "../shapes/GetBackupVaultNotificationsInput";
import { GetBackupVaultNotificationsOutput } from "../shapes/GetBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
