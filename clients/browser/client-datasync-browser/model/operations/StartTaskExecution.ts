import { StartTaskExecutionInput } from "../shapes/StartTaskExecutionInput";
import { StartTaskExecutionOutput } from "../shapes/StartTaskExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartTaskExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartTaskExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartTaskExecutionInput
  },
  output: {
    shape: StartTaskExecutionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
