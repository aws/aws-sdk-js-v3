import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type StopStackExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
