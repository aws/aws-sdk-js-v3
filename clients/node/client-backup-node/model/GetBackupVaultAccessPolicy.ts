import { GetBackupVaultAccessPolicyInput } from "./GetBackupVaultAccessPolicyInput";
import { GetBackupVaultAccessPolicyOutput } from "./GetBackupVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBackupVaultAccessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBackupVaultAccessPolicy",
  http: {
    method: "GET",
    requestUri: "/backup-vaults/{backupVaultName}/access-policy"
  },
  input: {
    shape: GetBackupVaultAccessPolicyInput
  },
  output: {
    shape: GetBackupVaultAccessPolicyOutput
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
