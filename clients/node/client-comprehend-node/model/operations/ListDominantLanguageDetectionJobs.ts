import { ListDominantLanguageDetectionJobsInput } from "../shapes/ListDominantLanguageDetectionJobsInput";
import { ListDominantLanguageDetectionJobsOutput } from "../shapes/ListDominantLanguageDetectionJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDominantLanguageDetectionJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDominantLanguageDetectionJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDominantLanguageDetectionJobsInput
  },
  output: {
    shape: ListDominantLanguageDetectionJobsOutput
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
