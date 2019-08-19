import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateOTAUpdateExceptionsUnion =
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | UnauthorizedException
  | InternalFailureException
  | ServiceUnavailableException;
