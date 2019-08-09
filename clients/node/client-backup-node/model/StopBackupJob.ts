import { StopBackupJobInput } from "./StopBackupJobInput";
import { StopBackupJobOutput } from "./StopBackupJobOutput";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopBackupJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopBackupJob",
  http: {
    method: "POST",
    requestUri: "/backup-jobs/{backupJobId}"
  },
  input: {
    shape: StopBackupJobInput
  },
  output: {
    shape: StopBackupJobOutput
  },
  errors: [
    {
      shape: MissingParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
