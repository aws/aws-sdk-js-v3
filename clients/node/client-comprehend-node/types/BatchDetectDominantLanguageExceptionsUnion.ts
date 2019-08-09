import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
export type BatchDetectDominantLanguageExceptionsUnion =
  | InvalidRequestException
  | TextSizeLimitExceededException
  | BatchSizeLimitExceededException
  | InternalServerException;
