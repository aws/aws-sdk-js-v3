import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
export type DescribeRuntimeConfigurationExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | InternalServiceException
  | InvalidRequestException;
