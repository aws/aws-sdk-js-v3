import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type CreateAssessmentTargetExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | AccessDeniedException
  | NoSuchEntityException
  | InvalidCrossAccountRoleException
  | ServiceTemporarilyUnavailableException;
