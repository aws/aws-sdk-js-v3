import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { VersionConflictException } from "./VersionConflictException";
export type CancelJobExecutionExceptionsUnion =
  | InvalidRequestException
  | InvalidStateTransitionException
  | ResourceNotFoundException
  | ThrottlingException
  | ServiceUnavailableException
  | VersionConflictException;
