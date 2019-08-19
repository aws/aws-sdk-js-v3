import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
export type DescribePlayerSessionsExceptionsUnion =
  | InternalServiceException
  | NotFoundException
  | InvalidRequestException
  | UnauthorizedException;
