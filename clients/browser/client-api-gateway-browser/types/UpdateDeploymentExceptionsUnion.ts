import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UpdateDeploymentExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | BadRequestException
  | TooManyRequestsException
  | ServiceUnavailableException;
