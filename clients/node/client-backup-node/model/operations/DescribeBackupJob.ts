import { DescribeBackupJobInput } from "../shapes/DescribeBackupJobInput";
import { DescribeBackupJobOutput } from "../shapes/DescribeBackupJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DependencyFailureException } from "../shapes/DependencyFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBackupJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBackupJob",
  http: {
    method: "GET",
    requestUri: "/backup-jobs/{backupJobId}"
  },
  input: {
    shape: DescribeBackupJobInput
  },
  output: {
    shape: DescribeBackupJobOutput
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
    },
    {
      shape: DependencyFailureException
    }
  ]
};
