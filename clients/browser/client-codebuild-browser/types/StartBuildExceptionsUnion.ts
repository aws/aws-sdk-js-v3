import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccountLimitExceededException } from "./AccountLimitExceededException";
export type StartBuildExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | AccountLimitExceededException;
