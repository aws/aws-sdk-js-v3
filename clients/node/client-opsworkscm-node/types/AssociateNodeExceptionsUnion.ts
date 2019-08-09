import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
export type AssociateNodeExceptionsUnion =
  | InvalidStateException
  | ResourceNotFoundException
  | ValidationException;
