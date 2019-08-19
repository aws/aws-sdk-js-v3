import { ListKeyPhrasesDetectionJobsInput } from "../shapes/ListKeyPhrasesDetectionJobsInput";
import { ListKeyPhrasesDetectionJobsOutput } from "../shapes/ListKeyPhrasesDetectionJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
