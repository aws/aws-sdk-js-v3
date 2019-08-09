import { ListKeyPhrasesDetectionJobsInput } from "./ListKeyPhrasesDetectionJobsInput";
import { ListKeyPhrasesDetectionJobsOutput } from "./ListKeyPhrasesDetectionJobsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListKeyPhrasesDetectionJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListKeyPhrasesDetectionJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListKeyPhrasesDetectionJobsInput
  },
  output: {
    shape: ListKeyPhrasesDetectionJobsOutput
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
