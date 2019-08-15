import { UpdatePipelineInput } from "../shapes/UpdatePipelineInput";
import { UpdatePipelineOutput } from "../shapes/UpdatePipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidStageDeclarationException } from "../shapes/InvalidStageDeclarationException";
import { InvalidActionDeclarationException } from "../shapes/InvalidActionDeclarationException";
import { InvalidBlockerDeclarationException } from "../shapes/InvalidBlockerDeclarationException";
import { InvalidStructureException } from "../shapes/InvalidStructureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePipelineInput
  },
  output: {
    shape: UpdatePipelineOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidStageDeclarationException
    },
    {
      shape: InvalidActionDeclarationException
    },
    {
      shape: InvalidBlockerDeclarationException
    },
    {
      shape: InvalidStructureException
    },
    {
      shape: LimitExceededException
    }
  ]
};
