import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
export type DescribeVpcPeeringAuthorizationsExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | InternalServiceException;
