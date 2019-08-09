import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type StopInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
