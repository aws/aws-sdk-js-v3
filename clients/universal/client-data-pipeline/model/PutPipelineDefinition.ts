import { PutPipelineDefinitionInput } from "./PutPipelineDefinitionInput";
import { PutPipelineDefinitionOutput } from "./PutPipelineDefinitionOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutPipelineDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPipelineDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutPipelineDefinitionInput
  },
  output: {
    shape: PutPipelineDefinitionOutput
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
