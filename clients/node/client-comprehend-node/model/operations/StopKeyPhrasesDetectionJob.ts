import { StopKeyPhrasesDetectionJobInput } from "../shapes/StopKeyPhrasesDetectionJobInput";
import { StopKeyPhrasesDetectionJobOutput } from "../shapes/StopKeyPhrasesDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
