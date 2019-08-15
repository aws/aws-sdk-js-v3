import { GetPipelineDefinitionInput } from "../shapes/GetPipelineDefinitionInput";
import { GetPipelineDefinitionOutput } from "../shapes/GetPipelineDefinitionOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPipelineDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPipelineDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPipelineDefinitionInput
  },
  output: {
    shape: GetPipelineDefinitionOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
