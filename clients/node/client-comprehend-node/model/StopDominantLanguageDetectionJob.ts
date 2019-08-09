import { StopDominantLanguageDetectionJobInput } from "./StopDominantLanguageDetectionJobInput";
import { StopDominantLanguageDetectionJobOutput } from "./StopDominantLanguageDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
