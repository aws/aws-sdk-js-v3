import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type SetPermissionExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
