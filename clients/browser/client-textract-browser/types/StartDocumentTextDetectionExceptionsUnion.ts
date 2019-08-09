import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { UnsupportedDocumentException } from "./UnsupportedDocumentException";
import { DocumentTooLargeException } from "./DocumentTooLargeException";
import { BadDocumentException } from "./BadDocumentException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
export type StartDocumentTextDetectionExceptionsUnion =
  | InvalidParameterException
  | InvalidS3ObjectException
  | UnsupportedDocumentException
  | DocumentTooLargeException
  | BadDocumentException
  | AccessDeniedException
  | ProvisionedThroughputExceededException
  | InternalServerError
  | IdempotentParameterMismatchException
  | ThrottlingException
  | LimitExceededException;
