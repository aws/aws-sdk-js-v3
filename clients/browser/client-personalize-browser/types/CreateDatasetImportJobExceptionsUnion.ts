import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateDatasetImportJobExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | LimitExceededException;
