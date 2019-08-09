import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateGameSessionQueueExceptionsUnion =
  | InternalServiceException
  | InvalidRequestException
  | UnauthorizedException
  | LimitExceededException;
