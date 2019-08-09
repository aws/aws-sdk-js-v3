import { StartTopicsDetectionJobInput } from "./StartTopicsDetectionJobInput";
import { StartTopicsDetectionJobOutput } from "./StartTopicsDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
