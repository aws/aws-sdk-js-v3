import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { PolicyEnforcedException } from "./PolicyEnforcedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { InsufficientCapacityException } from "./InsufficientCapacityException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type InitiateJobExceptionsUnion =
  | ResourceNotFoundException
  | PolicyEnforcedException
  | InvalidParameterValueException
  | MissingParameterValueException
  | InsufficientCapacityException
  | ServiceUnavailableException;
