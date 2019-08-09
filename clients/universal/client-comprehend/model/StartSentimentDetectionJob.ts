import { StartSentimentDetectionJobInput } from "./StartSentimentDetectionJobInput";
import { StartSentimentDetectionJobOutput } from "./StartSentimentDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
