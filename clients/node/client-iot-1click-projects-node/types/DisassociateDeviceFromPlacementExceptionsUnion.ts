import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DisassociateDeviceFromPlacementExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException;
