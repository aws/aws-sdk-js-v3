import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
export type ListDevicesExceptionsUnion =
  | RangeNotSatisfiableException
  | InvalidRequestException
  | InternalFailureException;
