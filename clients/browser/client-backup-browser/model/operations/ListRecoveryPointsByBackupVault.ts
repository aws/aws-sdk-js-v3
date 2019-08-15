import { ListRecoveryPointsByBackupVaultInput } from "../shapes/ListRecoveryPointsByBackupVaultInput";
import { ListRecoveryPointsByBackupVaultOutput } from "../shapes/ListRecoveryPointsByBackupVaultOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
