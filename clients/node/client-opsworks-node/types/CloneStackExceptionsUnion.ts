import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CloneStackExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
