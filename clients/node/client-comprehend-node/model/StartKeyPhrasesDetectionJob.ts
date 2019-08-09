import { StartKeyPhrasesDetectionJobInput } from "./StartKeyPhrasesDetectionJobInput";
import { StartKeyPhrasesDetectionJobOutput } from "./StartKeyPhrasesDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
