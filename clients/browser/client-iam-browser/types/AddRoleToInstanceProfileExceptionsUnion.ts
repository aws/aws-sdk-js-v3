import { NoSuchEntityException } from "./NoSuchEntityException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type AddRoleToInstanceProfileExceptionsUnion =
  | NoSuchEntityException
  | EntityAlreadyExistsException
  | LimitExceededException
  | UnmodifiableEntityException
  | ServiceFailureException;
