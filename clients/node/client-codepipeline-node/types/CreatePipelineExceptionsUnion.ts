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
export type CreatePipelineExceptionsUnion =
  | ValidationException
  | PipelineNameInUseException
  | InvalidStageDeclarationException
  | InvalidActionDeclarationException
  | InvalidBlockerDeclarationException
  | InvalidStructureException
  | LimitExceededException
  | TooManyTagsException
  | InvalidTagsException
  | ConcurrentModificationException;
