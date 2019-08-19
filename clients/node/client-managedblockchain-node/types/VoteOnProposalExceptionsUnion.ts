import { InvalidRequestException } from "./InvalidRequestException";
import { IllegalActionException } from "./IllegalActionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type VoteOnProposalExceptionsUnion =
  | InvalidRequestException
  | IllegalActionException
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalServiceErrorException;
