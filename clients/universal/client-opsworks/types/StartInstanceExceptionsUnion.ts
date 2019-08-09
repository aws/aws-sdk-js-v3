import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type StartInstanceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
