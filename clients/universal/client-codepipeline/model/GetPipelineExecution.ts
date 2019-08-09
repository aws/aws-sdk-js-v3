import { GetPipelineExecutionInput } from "./GetPipelineExecutionInput";
import { GetPipelineExecutionOutput } from "./GetPipelineExecutionOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineExecutionNotFoundException } from "./PipelineExecutionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
