import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidJobIdException } from "./InvalidJobIdException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
export type GetDocumentTextDetectionExceptionsUnion =
  | InvalidParameterException
  | AccessDeniedException
  | ProvisionedThroughputExceededException
  | InvalidJobIdException
  | InternalServerError
  | ThrottlingException;
