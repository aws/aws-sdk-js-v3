import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateAppExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
