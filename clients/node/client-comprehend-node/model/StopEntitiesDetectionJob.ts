import { StopEntitiesDetectionJobInput } from "./StopEntitiesDetectionJobInput";
import { StopEntitiesDetectionJobOutput } from "./StopEntitiesDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
