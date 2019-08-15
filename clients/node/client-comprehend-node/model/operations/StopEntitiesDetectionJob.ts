import { StopEntitiesDetectionJobInput } from "../shapes/StopEntitiesDetectionJobInput";
import { StopEntitiesDetectionJobOutput } from "../shapes/StopEntitiesDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopEntitiesDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopEntitiesDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopEntitiesDetectionJobInput
  },
  output: {
    shape: StopEntitiesDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
