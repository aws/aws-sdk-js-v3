import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
export type CreateComponentExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | InternalServerException;
