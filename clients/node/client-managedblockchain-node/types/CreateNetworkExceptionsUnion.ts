import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type CreateNetworkExceptionsUnion =
  | InvalidRequestException
  | AccessDeniedException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | ResourceLimitExceededException
  | InternalServiceErrorException;
