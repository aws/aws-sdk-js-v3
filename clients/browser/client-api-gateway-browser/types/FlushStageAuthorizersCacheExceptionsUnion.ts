import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type FlushStageAuthorizersCacheExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | BadRequestException
  | TooManyRequestsException;
