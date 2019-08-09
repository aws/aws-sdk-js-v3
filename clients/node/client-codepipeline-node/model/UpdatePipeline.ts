import { UpdatePipelineInput } from "./UpdatePipelineInput";
import { UpdatePipelineOutput } from "./UpdatePipelineOutput";
import { ValidationException } from "./ValidationException";
import { InvalidStageDeclarationException } from "./InvalidStageDeclarationException";
import { InvalidActionDeclarationException } from "./InvalidActionDeclarationException";
import { InvalidBlockerDeclarationException } from "./InvalidBlockerDeclarationException";
import { InvalidStructureException } from "./InvalidStructureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
