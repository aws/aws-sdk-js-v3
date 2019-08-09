import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
export type ListAssessmentTemplatesExceptionsUnion =
  | InternalException
  | InvalidInputException
  | AccessDeniedException
  | NoSuchEntityException;
