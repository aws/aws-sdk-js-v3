import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListInvitationsExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ResourceLimitExceededException
  | InternalServiceErrorException;
