import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
export type DetectLabelsExceptionsUnion =
  | InvalidS3ObjectException
  | InvalidParameterException
  | ImageTooLargeException
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | ProvisionedThroughputExceededException
  | InvalidImageFormatException;
