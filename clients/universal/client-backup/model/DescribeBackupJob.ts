import { DescribeBackupJobInput } from "./DescribeBackupJobInput";
import { DescribeBackupJobOutput } from "./DescribeBackupJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DependencyFailureException } from "./DependencyFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
