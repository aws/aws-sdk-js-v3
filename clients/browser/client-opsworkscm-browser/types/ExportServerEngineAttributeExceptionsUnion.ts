import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
export type ExportServerEngineAttributeExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | InvalidStateException;
