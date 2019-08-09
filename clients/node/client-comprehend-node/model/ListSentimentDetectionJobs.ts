import { ListSentimentDetectionJobsInput } from "./ListSentimentDetectionJobsInput";
import { ListSentimentDetectionJobsOutput } from "./ListSentimentDetectionJobsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
