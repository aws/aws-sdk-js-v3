import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
export type DeleteComponentExceptionsUnion =
  | ResourceNotFoundException
  | ValidationException
  | InternalServerException;
