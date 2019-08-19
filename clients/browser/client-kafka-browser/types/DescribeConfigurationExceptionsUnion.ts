import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeConfigurationExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalServerErrorException
  | ForbiddenException
  | NotFoundException
  | ServiceUnavailableException;
