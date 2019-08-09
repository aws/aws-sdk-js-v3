import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
export type DetectDominantLanguageExceptionsUnion =
  | InvalidRequestException
  | TextSizeLimitExceededException
  | InternalServerException;
