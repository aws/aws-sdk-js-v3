import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type TestInvokeAuthorizerExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException;
