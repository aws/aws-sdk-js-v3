import { BadRequestException } from "./BadRequestException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { ConflictException } from "./ConflictException";
export type UpdateChannelExceptionsUnion =
  | BadRequestException
  | UnprocessableEntityException
  | InternalServerErrorException
  | ForbiddenException
  | BadGatewayException
  | GatewayTimeoutException
  | ConflictException;
