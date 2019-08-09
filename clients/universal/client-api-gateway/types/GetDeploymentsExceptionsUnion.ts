import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetDeploymentsExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException
  | ServiceUnavailableException;
