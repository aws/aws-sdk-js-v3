import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteUserPermissionsBoundaryExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
