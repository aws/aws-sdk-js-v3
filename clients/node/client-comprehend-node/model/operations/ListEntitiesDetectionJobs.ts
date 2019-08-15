import { ListEntitiesDetectionJobsInput } from "../shapes/ListEntitiesDetectionJobsInput";
import { ListEntitiesDetectionJobsOutput } from "../shapes/ListEntitiesDetectionJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
