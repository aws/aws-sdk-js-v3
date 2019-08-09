import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetDeploymentExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | ServiceUnavailableException;
