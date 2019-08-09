import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceFault } from "./InternalServiceFault";
export type ListTagsForResourceExceptionsUnion =
  | InvalidParameterValueException
  | ResourceNotFoundException
  | InternalServiceFault;
