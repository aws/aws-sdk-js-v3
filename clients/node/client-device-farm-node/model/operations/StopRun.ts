import { StopRunInput } from "../shapes/StopRunInput";
import { StopRunOutput } from "../shapes/StopRunOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
