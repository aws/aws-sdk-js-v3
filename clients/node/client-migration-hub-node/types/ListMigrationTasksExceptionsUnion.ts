import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyErrorException } from "./PolicyErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListMigrationTasksExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ServiceUnavailableException
  | InvalidInputException
  | PolicyErrorException
  | ResourceNotFoundException;
