import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { PasswordPolicyViolationException } from "./PasswordPolicyViolationException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateLoginProfileExceptionsUnion =
  | EntityTemporarilyUnmodifiableException
  | NoSuchEntityException
  | PasswordPolicyViolationException
  | LimitExceededException
  | ServiceFailureException;
