import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type DeleteVpcLinkExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException;
