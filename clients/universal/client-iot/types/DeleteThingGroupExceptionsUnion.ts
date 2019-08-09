import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteThingGroupExceptionsUnion =
  | InvalidRequestException
  | VersionConflictException
  | ThrottlingException
  | InternalFailureException;
