import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type RegisterInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
