import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
export type UpdateVocabularyExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | InternalFailureException
  | NotFoundException
  | ConflictException;
