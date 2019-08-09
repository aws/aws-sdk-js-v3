import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
export type StartFleetActionsExceptionsUnion =
  | InternalServiceException
  | InvalidRequestException
  | UnauthorizedException
  | NotFoundException;
