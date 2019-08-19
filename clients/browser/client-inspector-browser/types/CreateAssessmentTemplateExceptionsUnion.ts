import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type CreateAssessmentTemplateExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | AccessDeniedException
  | NoSuchEntityException
  | ServiceTemporarilyUnavailableException;
