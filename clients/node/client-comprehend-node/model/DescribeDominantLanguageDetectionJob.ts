import { DescribeDominantLanguageDetectionJobInput } from "./DescribeDominantLanguageDetectionJobInput";
import { DescribeDominantLanguageDetectionJobOutput } from "./DescribeDominantLanguageDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDominantLanguageDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDominantLanguageDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDominantLanguageDetectionJobInput
  },
  output: {
    shape: DescribeDominantLanguageDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerException
    }
  ]
};
