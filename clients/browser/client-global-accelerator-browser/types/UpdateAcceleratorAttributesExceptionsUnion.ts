import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type UpdateAcceleratorAttributesExceptionsUnion =
  | AcceleratorNotFoundException
  | InternalServiceErrorException
  | InvalidArgumentException;
