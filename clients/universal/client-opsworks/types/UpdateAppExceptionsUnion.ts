import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateAppExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
