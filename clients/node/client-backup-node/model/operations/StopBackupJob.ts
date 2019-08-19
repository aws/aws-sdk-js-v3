import { StopBackupJobInput } from "../shapes/StopBackupJobInput";
import { StopBackupJobOutput } from "../shapes/StopBackupJobOutput";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
