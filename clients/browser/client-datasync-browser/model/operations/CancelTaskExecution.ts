import { CancelTaskExecutionInput } from "../shapes/CancelTaskExecutionInput";
import { CancelTaskExecutionOutput } from "../shapes/CancelTaskExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
