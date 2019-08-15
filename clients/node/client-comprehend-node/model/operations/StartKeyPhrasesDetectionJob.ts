import { StartKeyPhrasesDetectionJobInput } from "../shapes/StartKeyPhrasesDetectionJobInput";
import { StartKeyPhrasesDetectionJobOutput } from "../shapes/StartKeyPhrasesDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartKeyPhrasesDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartKeyPhrasesDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartKeyPhrasesDetectionJobInput
  },
  output: {
    shape: StartKeyPhrasesDetectionJobOutput
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
