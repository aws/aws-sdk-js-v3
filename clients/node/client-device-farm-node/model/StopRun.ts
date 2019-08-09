import { StopRunInput } from "./StopRunInput";
import { StopRunOutput } from "./StopRunOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopRunInput
  },
  output: {
    shape: StopRunOutput
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
