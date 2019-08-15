import { CreateBackupVaultInput } from "../shapes/CreateBackupVaultInput";
import { CreateBackupVaultOutput } from "../shapes/CreateBackupVaultOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBackupVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBackupVault",
  http: {
    method: "PUT",
    requestUri: "/backup-vaults/{backupVaultName}"
  },
  input: {
    shape: CreateBackupVaultInput
  },
  output: {
    shape: CreateBackupVaultOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AlreadyExistsException
    }
  ]
};
