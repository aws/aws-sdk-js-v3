import { DescribeRecoveryPointInput } from "../shapes/DescribeRecoveryPointInput";
import { DescribeRecoveryPointOutput } from "../shapes/DescribeRecoveryPointOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
