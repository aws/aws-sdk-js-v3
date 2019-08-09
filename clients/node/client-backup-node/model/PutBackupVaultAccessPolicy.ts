import { PutBackupVaultAccessPolicyInput } from "./PutBackupVaultAccessPolicyInput";
import { PutBackupVaultAccessPolicyOutput } from "./PutBackupVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
