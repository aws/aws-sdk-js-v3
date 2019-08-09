import { CreatePipelineInput } from "./CreatePipelineInput";
import { CreatePipelineOutput } from "./CreatePipelineOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNameInUseException } from "./PipelineNameInUseException";
import { InvalidStageDeclarationException } from "./InvalidStageDeclarationException";
import { InvalidActionDeclarationException } from "./InvalidActionDeclarationException";
import { InvalidBlockerDeclarationException } from "./InvalidBlockerDeclarationException";
import { InvalidStructureException } from "./InvalidStructureException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
