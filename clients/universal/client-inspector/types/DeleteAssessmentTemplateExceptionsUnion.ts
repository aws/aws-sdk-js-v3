import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AssessmentRunInProgressException } from "./AssessmentRunInProgressException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type DeleteAssessmentTemplateExceptionsUnion =
  | InternalException
  | InvalidInputException
  | AssessmentRunInProgressException
  | AccessDeniedException
  | NoSuchEntityException
  | ServiceTemporarilyUnavailableException;
