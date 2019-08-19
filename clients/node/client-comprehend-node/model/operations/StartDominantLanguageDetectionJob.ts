import { StartDominantLanguageDetectionJobInput } from "../shapes/StartDominantLanguageDetectionJobInput";
import { StartDominantLanguageDetectionJobOutput } from "../shapes/StartDominantLanguageDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDominantLanguageDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDominantLanguageDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDominantLanguageDetectionJobInput
  },
  output: {
    shape: StartDominantLanguageDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: KmsKeyValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
