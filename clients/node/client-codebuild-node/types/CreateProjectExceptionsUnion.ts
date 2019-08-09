import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { AccountLimitExceededException } from "./AccountLimitExceededException";
export type CreateProjectExceptionsUnion =
  | InvalidInputException
  | ResourceAlreadyExistsException
  | AccountLimitExceededException;
