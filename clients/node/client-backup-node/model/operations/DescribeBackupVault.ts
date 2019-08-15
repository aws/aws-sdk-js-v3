import { DescribeBackupVaultInput } from "../shapes/DescribeBackupVaultInput";
import { DescribeBackupVaultOutput } from "../shapes/DescribeBackupVaultOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBackupVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBackupVault",
  http: {
    method: "GET",
    requestUri: "/backup-vaults/{backupVaultName}"
  },
  input: {
    shape: DescribeBackupVaultInput
  },
  output: {
    shape: DescribeBackupVaultOutput
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
