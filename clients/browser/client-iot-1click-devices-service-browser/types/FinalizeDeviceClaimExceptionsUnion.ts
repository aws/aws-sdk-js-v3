import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { ResourceConflictException } from "./ResourceConflictException";
export type FinalizeDeviceClaimExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InternalFailureException
  | PreconditionFailedException
  | ResourceConflictException;
