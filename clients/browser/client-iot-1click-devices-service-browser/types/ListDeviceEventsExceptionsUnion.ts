import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
export type ListDeviceEventsExceptionsUnion =
  | ResourceNotFoundException
  | RangeNotSatisfiableException
  | InvalidRequestException
  | InternalFailureException;
