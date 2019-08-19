import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
export type DescribeFleetUtilizationExceptionsUnion =
  | InternalServiceException
  | NotFoundException
  | InvalidRequestException
  | UnauthorizedException;
