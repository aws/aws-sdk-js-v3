import { GetPipelineDefinitionInput } from "./GetPipelineDefinitionInput";
import { GetPipelineDefinitionOutput } from "./GetPipelineDefinitionOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
