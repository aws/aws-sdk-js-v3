import { CreateBackupVaultInput } from "./CreateBackupVaultInput";
import { CreateBackupVaultOutput } from "./CreateBackupVaultOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
