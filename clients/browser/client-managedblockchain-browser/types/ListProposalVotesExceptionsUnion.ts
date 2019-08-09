import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListProposalVotesExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
