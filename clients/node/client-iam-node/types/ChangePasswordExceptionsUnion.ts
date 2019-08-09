import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidUserTypeException } from "./InvalidUserTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { PasswordPolicyViolationException } from "./PasswordPolicyViolationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ChangePasswordExceptionsUnion =
  | NoSuchEntityException
  | InvalidUserTypeException
  | LimitExceededException
  | EntityTemporarilyUnmodifiableException
  | PasswordPolicyViolationException
  | ServiceFailureException;
