import { StopSentimentDetectionJobInput } from "../shapes/StopSentimentDetectionJobInput";
import { StopSentimentDetectionJobOutput } from "../shapes/StopSentimentDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopSentimentDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopSentimentDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopSentimentDetectionJobInput
  },
  output: {
    shape: StopSentimentDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
