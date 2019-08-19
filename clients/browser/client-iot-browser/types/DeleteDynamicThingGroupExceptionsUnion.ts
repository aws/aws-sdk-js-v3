import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteDynamicThingGroupExceptionsUnion =
  | InvalidRequestException
  | VersionConflictException
  | ThrottlingException
  | InternalFailureException;
