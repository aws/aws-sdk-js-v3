import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type CreateAuthorizerExceptionsUnion =
  | ResourceAlreadyExistsException
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
