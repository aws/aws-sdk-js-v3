import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type PutIntegrationResponseExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | LimitExceededException
  | BadRequestException
  | TooManyRequestsException
  | ConflictException;
