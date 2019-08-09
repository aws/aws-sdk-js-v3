import { ValidationException } from "./ValidationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteCustomActionTypeExceptionsUnion =
  | ValidationException
  | ConcurrentModificationException;
