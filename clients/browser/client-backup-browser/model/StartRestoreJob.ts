import { StartRestoreJobInput } from "./StartRestoreJobInput";
import { StartRestoreJobOutput } from "./StartRestoreJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartRestoreJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartRestoreJob",
  http: {
    method: "PUT",
    requestUri: "/restore-jobs"
  },
  input: {
    shape: StartRestoreJobInput
  },
  output: {
    shape: StartRestoreJobOutput
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
