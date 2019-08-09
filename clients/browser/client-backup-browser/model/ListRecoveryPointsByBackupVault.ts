import { ListRecoveryPointsByBackupVaultInput } from "./ListRecoveryPointsByBackupVaultInput";
import { ListRecoveryPointsByBackupVaultOutput } from "./ListRecoveryPointsByBackupVaultOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRecoveryPointsByBackupVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRecoveryPointsByBackupVault",
  http: {
    method: "GET",
    requestUri: "/backup-vaults/{backupVaultName}/recovery-points/"
  },
  input: {
    shape: ListRecoveryPointsByBackupVaultInput
  },
  output: {
    shape: ListRecoveryPointsByBackupVaultOutput
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
