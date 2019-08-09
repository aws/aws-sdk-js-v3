import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListProposalsExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
