import { GetPipelineInput } from "../shapes/GetPipelineInput";
import { GetPipelineOutput } from "../shapes/GetPipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineVersionNotFoundException } from "../shapes/PipelineVersionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
