import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type ListProblemsExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | InternalServerException;
