import { DeleteBackupVaultInput } from "../shapes/DeleteBackupVaultInput";
import { DeleteBackupVaultOutput } from "../shapes/DeleteBackupVaultOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
