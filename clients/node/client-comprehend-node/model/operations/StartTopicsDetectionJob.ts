import { StartTopicsDetectionJobInput } from "../shapes/StartTopicsDetectionJobInput";
import { StartTopicsDetectionJobOutput } from "../shapes/StartTopicsDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartTopicsDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartTopicsDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartTopicsDetectionJobInput
  },
  output: {
    shape: StartTopicsDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: KmsKeyValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
