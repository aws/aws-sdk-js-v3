import { GetPipelineExecutionInput } from "../shapes/GetPipelineExecutionInput";
import { GetPipelineExecutionOutput } from "../shapes/GetPipelineExecutionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineExecutionNotFoundException } from "../shapes/PipelineExecutionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPipelineExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPipelineExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPipelineExecutionInput
  },
  output: {
    shape: GetPipelineExecutionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineExecutionNotFoundException
    }
  ]
};
