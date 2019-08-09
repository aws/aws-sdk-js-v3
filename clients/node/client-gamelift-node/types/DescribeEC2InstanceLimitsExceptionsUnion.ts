import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
export type DescribeEC2InstanceLimitsExceptionsUnion =
  | InvalidRequestException
  | InternalServiceException
  | UnauthorizedException;
