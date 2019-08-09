import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type CreateNodeExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | ResourceNotReadyException
  | ThrottlingException
  | ResourceLimitExceededException
  | InternalServiceErrorException;
