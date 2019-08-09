import { ListTopicsDetectionJobsInput } from "./ListTopicsDetectionJobsInput";
import { ListTopicsDetectionJobsOutput } from "./ListTopicsDetectionJobsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
