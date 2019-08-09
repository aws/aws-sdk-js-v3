import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { AcceleratorNotDisabledException } from "./AcceleratorNotDisabledException";
import { AssociatedListenerFoundException } from "./AssociatedListenerFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type DeleteAcceleratorExceptionsUnion =
  | AcceleratorNotFoundException
  | AcceleratorNotDisabledException
  | AssociatedListenerFoundException
  | InternalServiceErrorException
  | InvalidArgumentException;
