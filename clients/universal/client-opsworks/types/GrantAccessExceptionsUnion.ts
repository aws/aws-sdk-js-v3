import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type GrantAccessExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
