import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteStackExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
