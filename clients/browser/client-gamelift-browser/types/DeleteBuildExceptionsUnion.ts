import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
export type DeleteBuildExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | InternalServiceException
  | InvalidRequestException;
