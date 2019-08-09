import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type PutGatewayResponseExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | LimitExceededException
  | TooManyRequestsException;
