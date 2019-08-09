import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidQueryException } from "./InvalidQueryException";
export type UpdateDynamicThingGroupExceptionsUnion =
  | InvalidRequestException
  | VersionConflictException
  | ThrottlingException
  | InternalFailureException
  | ResourceNotFoundException
  | InvalidQueryException;
