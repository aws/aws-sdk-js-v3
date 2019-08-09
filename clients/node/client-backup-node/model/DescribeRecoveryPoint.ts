import { DescribeRecoveryPointInput } from "./DescribeRecoveryPointInput";
import { DescribeRecoveryPointOutput } from "./DescribeRecoveryPointOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeRecoveryPoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRecoveryPoint",
  http: {
    method: "GET",
    requestUri:
      "/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}"
  },
  input: {
    shape: DescribeRecoveryPointInput
  },
  output: {
    shape: DescribeRecoveryPointOutput
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
