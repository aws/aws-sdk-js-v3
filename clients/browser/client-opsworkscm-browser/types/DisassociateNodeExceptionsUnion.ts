import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
export type DisassociateNodeExceptionsUnion =
  | InvalidStateException
  | ResourceNotFoundException
  | ValidationException;
