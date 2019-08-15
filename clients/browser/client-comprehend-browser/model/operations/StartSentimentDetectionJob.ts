import { StartSentimentDetectionJobInput } from "../shapes/StartSentimentDetectionJobInput";
import { StartSentimentDetectionJobOutput } from "../shapes/StartSentimentDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartSentimentDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSentimentDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartSentimentDetectionJobInput
  },
  output: {
    shape: StartSentimentDetectionJobOutput
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
