import { StopKeyPhrasesDetectionJobInput } from "./StopKeyPhrasesDetectionJobInput";
import { StopKeyPhrasesDetectionJobOutput } from "./StopKeyPhrasesDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopKeyPhrasesDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopKeyPhrasesDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopKeyPhrasesDetectionJobInput
  },
  output: {
    shape: StopKeyPhrasesDetectionJobOutput
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
