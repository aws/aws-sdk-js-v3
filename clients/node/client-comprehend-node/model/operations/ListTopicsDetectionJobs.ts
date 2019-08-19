import { ListTopicsDetectionJobsInput } from "../shapes/ListTopicsDetectionJobsInput";
import { ListTopicsDetectionJobsOutput } from "../shapes/ListTopicsDetectionJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTopicsDetectionJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTopicsDetectionJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTopicsDetectionJobsInput
  },
  output: {
    shape: ListTopicsDetectionJobsOutput
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
