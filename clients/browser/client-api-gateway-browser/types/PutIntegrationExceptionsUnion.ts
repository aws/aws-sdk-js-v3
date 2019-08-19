import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type PutIntegrationExceptionsUnion =
  | UnauthorizedException
  | BadRequestException
  | ConflictException
  | NotFoundException
  | TooManyRequestsException;
