import { NoSuchEntityException } from "./NoSuchEntityException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UntagUserExceptionsUnion =
  | NoSuchEntityException
  | ConcurrentModificationException
  | ServiceFailureException;
