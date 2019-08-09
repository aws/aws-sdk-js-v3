import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type RebootInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
