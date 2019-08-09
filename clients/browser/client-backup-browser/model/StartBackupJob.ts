import { StartBackupJobInput } from "./StartBackupJobInput";
import { StartBackupJobOutput } from "./StartBackupJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
