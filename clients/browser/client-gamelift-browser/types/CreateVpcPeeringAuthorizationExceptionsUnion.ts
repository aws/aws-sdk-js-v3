import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type CreateVpcPeeringAuthorizationExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | NotFoundException
  | InternalServiceException;
