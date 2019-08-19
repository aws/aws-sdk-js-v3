import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedLanguagePairException } from "./UnsupportedLanguagePairException";
import { DetectedLanguageLowConfidenceException } from "./DetectedLanguageLowConfidenceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type TranslateTextExceptionsUnion =
  | InvalidRequestException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | UnsupportedLanguagePairException
  | DetectedLanguageLowConfidenceException
  | ResourceNotFoundException
  | InternalServerException
  | ServiceUnavailableException;
