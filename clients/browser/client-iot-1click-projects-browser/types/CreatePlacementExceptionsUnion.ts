import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceConflictException } from "./ResourceConflictException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreatePlacementExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceConflictException
  | ResourceNotFoundException;
