import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InternalServiceFault } from "./InternalServiceFault";
export type TagResourceExceptionsUnion =
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ConcurrentModificationException
  | InternalServiceFault;
