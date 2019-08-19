import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
export type ListProgressUpdateStreamsExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ServiceUnavailableException
  | InvalidInputException;
