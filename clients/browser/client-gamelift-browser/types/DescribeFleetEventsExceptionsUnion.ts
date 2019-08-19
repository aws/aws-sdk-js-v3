import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
export type DescribeFleetEventsExceptionsUnion =
  | NotFoundException
  | InternalServiceException
  | UnauthorizedException
  | InvalidRequestException;
