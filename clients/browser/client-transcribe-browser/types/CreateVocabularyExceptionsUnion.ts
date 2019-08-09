import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
export type CreateVocabularyExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | InternalFailureException
  | ConflictException;
