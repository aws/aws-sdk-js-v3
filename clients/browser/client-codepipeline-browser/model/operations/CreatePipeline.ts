import { CreatePipelineInput } from "../shapes/CreatePipelineInput";
import { CreatePipelineOutput } from "../shapes/CreatePipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNameInUseException } from "../shapes/PipelineNameInUseException";
import { InvalidStageDeclarationException } from "../shapes/InvalidStageDeclarationException";
import { InvalidActionDeclarationException } from "../shapes/InvalidActionDeclarationException";
import { InvalidBlockerDeclarationException } from "../shapes/InvalidBlockerDeclarationException";
import { InvalidStructureException } from "../shapes/InvalidStructureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InvalidTagsException } from "../shapes/InvalidTagsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePipelineInput
  },
  output: {
    shape: CreatePipelineOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNameInUseException
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
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: InvalidTagsException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
