import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
export type UpdateUsagePlanExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException
  | ConflictException;
