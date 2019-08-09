import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListCreatedArtifactsExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ServiceUnavailableException
  | InvalidInputException
  | ResourceNotFoundException;
