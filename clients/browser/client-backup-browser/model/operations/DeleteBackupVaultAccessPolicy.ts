import { DeleteBackupVaultAccessPolicyInput } from "../shapes/DeleteBackupVaultAccessPolicyInput";
import { DeleteBackupVaultAccessPolicyOutput } from "../shapes/DeleteBackupVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBackupVaultAccessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackupVaultAccessPolicy",
  http: {
    method: "DELETE",
    requestUri: "/backup-vaults/{backupVaultName}/access-policy"
  },
  input: {
    shape: DeleteBackupVaultAccessPolicyInput
  },
  output: {
    shape: DeleteBackupVaultAccessPolicyOutput
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
