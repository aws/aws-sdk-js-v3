import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type AssignInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
