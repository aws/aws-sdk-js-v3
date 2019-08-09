import { InvalidRequestException } from "./InvalidRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { ResourceConflictException } from "./ResourceConflictException";
export type InvokeDeviceMethodExceptionsUnion =
  | InvalidRequestException
  | PreconditionFailedException
  | InternalFailureException
  | ResourceNotFoundException
  | RangeNotSatisfiableException
  | ResourceConflictException;
