import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
