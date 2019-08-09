import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateUsagePlanKeyExceptionsUnion =
  | BadRequestException
  | ConflictException
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException;
