import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetApiKeysExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException;
