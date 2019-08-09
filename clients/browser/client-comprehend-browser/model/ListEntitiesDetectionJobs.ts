import { ListEntitiesDetectionJobsInput } from "./ListEntitiesDetectionJobsInput";
import { ListEntitiesDetectionJobsOutput } from "./ListEntitiesDetectionJobsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEntitiesDetectionJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEntitiesDetectionJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEntitiesDetectionJobsInput
  },
  output: {
    shape: ListEntitiesDetectionJobsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidFilterException
    },
    {
      shape: InternalServerException
    }
  ]
};
