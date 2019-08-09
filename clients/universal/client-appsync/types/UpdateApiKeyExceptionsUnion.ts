import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ApiKeyValidityOutOfBoundsException } from "./ApiKeyValidityOutOfBoundsException";
export type UpdateApiKeyExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | UnauthorizedException
  | LimitExceededException
  | InternalFailureException
  | ApiKeyValidityOutOfBoundsException;
