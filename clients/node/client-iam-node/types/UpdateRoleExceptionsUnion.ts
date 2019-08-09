import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateRoleExceptionsUnion =
  | UnmodifiableEntityException
  | NoSuchEntityException
  | ServiceFailureException;
