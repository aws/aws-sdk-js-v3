import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
export type BatchDetectEntitiesExceptionsUnion =
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | BatchSizeLimitExceededException
  | InternalServerException;
