import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeregisterInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
