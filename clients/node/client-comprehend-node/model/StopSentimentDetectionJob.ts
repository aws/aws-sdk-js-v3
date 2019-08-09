import { StopSentimentDetectionJobInput } from "./StopSentimentDetectionJobInput";
import { StopSentimentDetectionJobOutput } from "./StopSentimentDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
