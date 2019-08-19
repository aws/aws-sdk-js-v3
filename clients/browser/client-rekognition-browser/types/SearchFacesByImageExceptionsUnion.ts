import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
export type SearchFacesByImageExceptionsUnion =
  | InvalidS3ObjectException
  | InvalidParameterException
  | ImageTooLargeException
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | InvalidImageFormatException;
