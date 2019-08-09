import { StartTaskExecutionInput } from "./StartTaskExecutionInput";
import { StartTaskExecutionOutput } from "./StartTaskExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
