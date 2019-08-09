import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidGameSessionStatusException } from "./InvalidGameSessionStatusException";
import { InvalidRequestException } from "./InvalidRequestException";
export type UpdateGameSessionExceptionsUnion =
  | NotFoundException
  | ConflictException
  | InternalServiceException
  | UnauthorizedException
  | InvalidGameSessionStatusException
  | InvalidRequestException;
