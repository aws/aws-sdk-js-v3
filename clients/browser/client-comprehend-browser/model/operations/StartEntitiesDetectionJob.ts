import { StartEntitiesDetectionJobInput } from "../shapes/StartEntitiesDetectionJobInput";
import { StartEntitiesDetectionJobOutput } from "../shapes/StartEntitiesDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartEntitiesDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartEntitiesDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartEntitiesDetectionJobInput
  },
  output: {
    shape: StartEntitiesDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: KmsKeyValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
