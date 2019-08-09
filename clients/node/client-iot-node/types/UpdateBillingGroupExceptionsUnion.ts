import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateBillingGroupExceptionsUnion =
  | InvalidRequestException
  | VersionConflictException
  | ThrottlingException
  | InternalFailureException
  | ResourceNotFoundException;
