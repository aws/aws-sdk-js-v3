import { CancelTaskExecutionInput } from "./CancelTaskExecutionInput";
import { CancelTaskExecutionOutput } from "./CancelTaskExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelTaskExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelTaskExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelTaskExecutionInput
  },
  output: {
    shape: CancelTaskExecutionOutput
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
