import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateDeploymentExceptionsUnion =
  | UnauthorizedException
  | BadRequestException
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | TooManyRequestsException
  | ServiceUnavailableException;
