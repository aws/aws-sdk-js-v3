import { StartRestoreJobInput } from "../shapes/StartRestoreJobInput";
import { StartRestoreJobOutput } from "../shapes/StartRestoreJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
