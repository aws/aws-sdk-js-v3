import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type DeleteUsagePlanExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException;
