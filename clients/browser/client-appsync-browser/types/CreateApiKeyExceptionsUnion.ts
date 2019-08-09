import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ApiKeyLimitExceededException } from "./ApiKeyLimitExceededException";
import { ApiKeyValidityOutOfBoundsException } from "./ApiKeyValidityOutOfBoundsException";
export type CreateApiKeyExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | LimitExceededException
  | UnauthorizedException
  | InternalFailureException
  | ApiKeyLimitExceededException
  | ApiKeyValidityOutOfBoundsException;
