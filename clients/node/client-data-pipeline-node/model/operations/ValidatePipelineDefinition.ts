import { ValidatePipelineDefinitionInput } from "../shapes/ValidatePipelineDefinitionInput";
import { ValidatePipelineDefinitionOutput } from "../shapes/ValidatePipelineDefinitionOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
