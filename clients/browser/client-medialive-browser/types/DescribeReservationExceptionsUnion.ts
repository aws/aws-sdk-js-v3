import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DescribeReservationExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException
  | BadGatewayException
  | NotFoundException
  | GatewayTimeoutException
  | TooManyRequestsException;
