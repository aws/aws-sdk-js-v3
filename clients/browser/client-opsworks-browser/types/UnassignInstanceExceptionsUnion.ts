import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UnassignInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
