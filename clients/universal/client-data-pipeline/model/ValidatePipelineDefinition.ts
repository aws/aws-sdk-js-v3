import { ValidatePipelineDefinitionInput } from "./ValidatePipelineDefinitionInput";
import { ValidatePipelineDefinitionOutput } from "./ValidatePipelineDefinitionOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ValidatePipelineDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ValidatePipelineDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ValidatePipelineDefinitionInput
  },
  output: {
    shape: ValidatePipelineDefinitionOutput
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
