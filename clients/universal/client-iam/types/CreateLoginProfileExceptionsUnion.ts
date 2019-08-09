import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { PasswordPolicyViolationException } from "./PasswordPolicyViolationException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateLoginProfileExceptionsUnion =
  | EntityAlreadyExistsException
  | NoSuchEntityException
  | PasswordPolicyViolationException
  | LimitExceededException
  | ServiceFailureException;
