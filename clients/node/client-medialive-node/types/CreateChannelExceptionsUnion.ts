import { BadRequestException } from "./BadRequestException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type CreateChannelExceptionsUnion =
  | BadRequestException
  | UnprocessableEntityException
  | InternalServerErrorException
  | ForbiddenException
  | BadGatewayException
  | GatewayTimeoutException
  | TooManyRequestsException
  | ConflictException;
