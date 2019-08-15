import { GetBackupVaultAccessPolicyInput } from "../shapes/GetBackupVaultAccessPolicyInput";
import { GetBackupVaultAccessPolicyOutput } from "../shapes/GetBackupVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
