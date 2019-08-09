import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceConflictException } from "./ResourceConflictException";
export type InitiateDeviceClaimExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InternalFailureException
  | ResourceConflictException;
