import { DescribeBackupVaultInput } from "./DescribeBackupVaultInput";
import { DescribeBackupVaultOutput } from "./DescribeBackupVaultOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
