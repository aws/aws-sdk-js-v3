import { StartBackupJobInput } from "../shapes/StartBackupJobInput";
import { StartBackupJobOutput } from "../shapes/StartBackupJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartBackupJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartBackupJob",
  http: {
    method: "PUT",
    requestUri: "/backup-jobs"
  },
  input: {
    shape: StartBackupJobInput
  },
  output: {
    shape: StartBackupJobOutput
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
      shape: LimitExceededException
    }
  ]
};
