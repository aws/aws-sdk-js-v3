import { GetPipelineStateInput } from "./GetPipelineStateInput";
import { GetPipelineStateOutput } from "./GetPipelineStateOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPipelineState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPipelineState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPipelineStateInput
  },
  output: {
    shape: GetPipelineStateOutput
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
