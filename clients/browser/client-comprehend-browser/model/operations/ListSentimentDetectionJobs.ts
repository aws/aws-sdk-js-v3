import { ListSentimentDetectionJobsInput } from "../shapes/ListSentimentDetectionJobsInput";
import { ListSentimentDetectionJobsOutput } from "../shapes/ListSentimentDetectionJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSentimentDetectionJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSentimentDetectionJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSentimentDetectionJobsInput
  },
  output: {
    shape: ListSentimentDetectionJobsOutput
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
