import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateDatasetGroupExceptionsUnion =
  | InvalidInputException
  | ResourceAlreadyExistsException
  | LimitExceededException;
