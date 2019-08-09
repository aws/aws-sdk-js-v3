import { NoSuchEntityException } from "./NoSuchEntityException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UntagRoleExceptionsUnion =
  | NoSuchEntityException
  | ConcurrentModificationException
  | ServiceFailureException;
