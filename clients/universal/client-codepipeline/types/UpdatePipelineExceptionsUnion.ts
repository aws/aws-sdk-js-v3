import { ValidationException } from "./ValidationException";
import { InvalidStageDeclarationException } from "./InvalidStageDeclarationException";
import { InvalidActionDeclarationException } from "./InvalidActionDeclarationException";
import { InvalidBlockerDeclarationException } from "./InvalidBlockerDeclarationException";
import { InvalidStructureException } from "./InvalidStructureException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdatePipelineExceptionsUnion =
  | ValidationException
  | InvalidStageDeclarationException
  | InvalidActionDeclarationException
  | InvalidBlockerDeclarationException
  | InvalidStructureException
  | LimitExceededException;
