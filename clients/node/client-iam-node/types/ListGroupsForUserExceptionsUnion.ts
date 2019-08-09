import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListGroupsForUserExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
