import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteVocabularyExceptionsUnion =
  | NotFoundException
  | LimitExceededException
  | BadRequestException
  | InternalFailureException;
