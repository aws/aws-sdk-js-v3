import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { TooManyTagsException } from "./TooManyTagsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
export type CreateDocumentClassifierExceptionsUnion =
  | InvalidRequestException
  | ResourceInUseException
  | TooManyTagsException
  | TooManyRequestsException
  | ResourceLimitExceededException
  | UnsupportedLanguageException
  | KmsKeyValidationException
  | InternalServerException;
