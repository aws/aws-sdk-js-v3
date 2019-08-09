import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type DescribeClusterOperationExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | UnauthorizedException
  | InternalServerErrorException
  | ForbiddenException;
