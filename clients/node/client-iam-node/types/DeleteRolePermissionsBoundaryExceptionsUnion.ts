import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteRolePermissionsBoundaryExceptionsUnion =
  | NoSuchEntityException
  | UnmodifiableEntityException
  | ServiceFailureException;
