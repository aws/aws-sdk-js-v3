import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { UnsupportedDocumentException } from "./UnsupportedDocumentException";
import { DocumentTooLargeException } from "./DocumentTooLargeException";
import { BadDocumentException } from "./BadDocumentException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
export type DetectDocumentTextExceptionsUnion =
  | InvalidParameterException
  | InvalidS3ObjectException
  | UnsupportedDocumentException
  | DocumentTooLargeException
  | BadDocumentException
  | AccessDeniedException
  | ProvisionedThroughputExceededException
  | InternalServerError
  | ThrottlingException;
