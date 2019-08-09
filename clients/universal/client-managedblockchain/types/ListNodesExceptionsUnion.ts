import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListNodesExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
