import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { InternalServerException } from "./InternalServerException";
export type DetectEntitiesExceptionsUnion =
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | InternalServerException;
