import { StopJobInput } from "./StopJobInput";
import { StopJobOutput } from "./StopJobOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopJobInput
  },
  output: {
    shape: StopJobOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
