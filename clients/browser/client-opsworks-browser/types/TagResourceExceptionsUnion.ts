import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type TagResourceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
