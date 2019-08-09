import { DeleteBackupVaultAccessPolicyInput } from "./DeleteBackupVaultAccessPolicyInput";
import { DeleteBackupVaultAccessPolicyOutput } from "./DeleteBackupVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
