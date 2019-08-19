import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateVpcLinkExceptionsUnion =
  | UnauthorizedException
  | BadRequestException
  | TooManyRequestsException;
