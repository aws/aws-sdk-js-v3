import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { AgentsAlreadyRunningAssessmentException } from "./AgentsAlreadyRunningAssessmentException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type StartAssessmentRunExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | AccessDeniedException
  | NoSuchEntityException
  | InvalidCrossAccountRoleException
  | AgentsAlreadyRunningAssessmentException
  | ServiceTemporarilyUnavailableException;
