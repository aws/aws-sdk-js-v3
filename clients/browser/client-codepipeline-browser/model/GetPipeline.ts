import { GetPipelineInput } from "./GetPipelineInput";
import { GetPipelineOutput } from "./GetPipelineOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineVersionNotFoundException } from "./PipelineVersionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPipelineInput
  },
  output: {
    shape: GetPipelineOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineVersionNotFoundException
    }
  ]
};
