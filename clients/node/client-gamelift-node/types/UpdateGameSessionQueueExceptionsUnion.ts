import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
export type UpdateGameSessionQueueExceptionsUnion =
  | InternalServiceException
  | InvalidRequestException
  | NotFoundException
  | UnauthorizedException;
