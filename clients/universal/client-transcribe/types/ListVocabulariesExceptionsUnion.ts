import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
export type ListVocabulariesExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | InternalFailureException;
