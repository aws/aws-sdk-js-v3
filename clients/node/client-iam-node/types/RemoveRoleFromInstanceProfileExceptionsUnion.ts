import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type RemoveRoleFromInstanceProfileExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | UnmodifiableEntityException
  | ServiceFailureException;
