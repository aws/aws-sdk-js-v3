import { PutBackupVaultAccessPolicyInput } from "../shapes/PutBackupVaultAccessPolicyInput";
import { PutBackupVaultAccessPolicyOutput } from "../shapes/PutBackupVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBackupVaultAccessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBackupVaultAccessPolicy",
  http: {
    method: "PUT",
    requestUri: "/backup-vaults/{backupVaultName}/access-policy"
  },
  input: {
    shape: PutBackupVaultAccessPolicyInput
  },
  output: {
    shape: PutBackupVaultAccessPolicyOutput
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
