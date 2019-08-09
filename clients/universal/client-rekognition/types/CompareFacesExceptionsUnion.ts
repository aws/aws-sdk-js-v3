import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
export type CompareFacesExceptionsUnion =
  | InvalidParameterException
  | InvalidS3ObjectException
  | ImageTooLargeException
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | ProvisionedThroughputExceededException
  | InvalidImageFormatException;
