import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateStackExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
