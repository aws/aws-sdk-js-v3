import { GetPipelineStateInput } from "../shapes/GetPipelineStateInput";
import { GetPipelineStateOutput } from "../shapes/GetPipelineStateOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
