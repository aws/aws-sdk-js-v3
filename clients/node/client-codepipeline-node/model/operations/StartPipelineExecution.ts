import { StartPipelineExecutionInput } from "../shapes/StartPipelineExecutionInput";
import { StartPipelineExecutionOutput } from "../shapes/StartPipelineExecutionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartPipelineExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartPipelineExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartPipelineExecutionInput
  },
  output: {
    shape: StartPipelineExecutionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNotFoundException
    }
  ]
};
