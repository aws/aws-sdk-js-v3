import { StopDominantLanguageDetectionJobInput } from "../shapes/StopDominantLanguageDetectionJobInput";
import { StopDominantLanguageDetectionJobOutput } from "../shapes/StopDominantLanguageDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopDominantLanguageDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopDominantLanguageDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopDominantLanguageDetectionJobInput
  },
  output: {
    shape: StopDominantLanguageDetectionJobOutput
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
