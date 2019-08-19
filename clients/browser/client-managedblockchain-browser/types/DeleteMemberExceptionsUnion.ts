import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type DeleteMemberExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ResourceNotFoundException
  | ResourceNotReadyException
  | ThrottlingException
  | InternalServiceErrorException;
