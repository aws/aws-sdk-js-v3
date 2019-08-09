import { DeleteBackupVaultInput } from "./DeleteBackupVaultInput";
import { DeleteBackupVaultOutput } from "./DeleteBackupVaultOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBackupVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackupVault",
  http: {
    method: "DELETE",
    requestUri: "/backup-vaults/{backupVaultName}"
  },
  input: {
    shape: DeleteBackupVaultInput
  },
  output: {
    shape: DeleteBackupVaultOutput
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
    },
    {
      shape: InvalidRequestException
    }
  ]
};
