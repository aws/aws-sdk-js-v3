import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type StopApplicationExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | UnsupportedOperationException;
