import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListRoleTagsExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
