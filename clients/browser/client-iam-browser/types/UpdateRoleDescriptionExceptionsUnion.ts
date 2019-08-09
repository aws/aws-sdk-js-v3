import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateRoleDescriptionExceptionsUnion =
  | NoSuchEntityException
  | UnmodifiableEntityException
  | ServiceFailureException;
