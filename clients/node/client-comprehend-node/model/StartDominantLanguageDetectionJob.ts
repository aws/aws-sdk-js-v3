import { StartDominantLanguageDetectionJobInput } from "./StartDominantLanguageDetectionJobInput";
import { StartDominantLanguageDetectionJobOutput } from "./StartDominantLanguageDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
