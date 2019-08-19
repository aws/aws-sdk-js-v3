import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListListenersExceptionsUnion =
  | AcceleratorNotFoundException
  | InvalidNextTokenException
  | InternalServiceErrorException;
