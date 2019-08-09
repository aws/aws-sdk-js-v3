import { StopExecutionInput } from "./StopExecutionInput";
import { StopExecutionOutput } from "./StopExecutionOutput";
import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopExecutionInput
  },
  output: {
    shape: StopExecutionOutput
  },
  errors: [
    {
      shape: ExecutionDoesNotExist
    },
    {
      shape: InvalidArn
    }
  ]
};
