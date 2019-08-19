import { DescribeDominantLanguageDetectionJobInput } from "../shapes/DescribeDominantLanguageDetectionJobInput";
import { DescribeDominantLanguageDetectionJobOutput } from "../shapes/DescribeDominantLanguageDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
