import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
