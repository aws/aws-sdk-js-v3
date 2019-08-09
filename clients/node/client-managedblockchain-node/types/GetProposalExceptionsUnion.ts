import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type GetProposalExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalServiceErrorException;
