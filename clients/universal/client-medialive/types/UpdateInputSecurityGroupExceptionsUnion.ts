import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { ConflictException } from "./ConflictException";
export type UpdateInputSecurityGroupExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException
  | BadGatewayException
  | NotFoundException
  | GatewayTimeoutException
  | ConflictException;
