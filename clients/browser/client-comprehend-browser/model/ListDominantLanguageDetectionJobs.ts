import { ListDominantLanguageDetectionJobsInput } from "./ListDominantLanguageDetectionJobsInput";
import { ListDominantLanguageDetectionJobsOutput } from "./ListDominantLanguageDetectionJobsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
