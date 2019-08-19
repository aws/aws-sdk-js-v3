import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type GetOTAUpdateExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | InternalFailureException
  | ServiceUnavailableException
  | ResourceNotFoundException;
