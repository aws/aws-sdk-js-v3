import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
export type CreateEventTrackerExceptionsUnion =
  | InvalidInputException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | LimitExceededException
  | ResourceInUseException;
