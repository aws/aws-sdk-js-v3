import { StopJobInput } from "../shapes/StopJobInput";
import { StopJobOutput } from "../shapes/StopJobOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
