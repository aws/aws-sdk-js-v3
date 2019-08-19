import { InvalidInputException } from "./InvalidInputException";
import { AccountLimitExceededException } from "./AccountLimitExceededException";
export type ImportSourceCredentialsExceptionsUnion =
  | InvalidInputException
  | AccountLimitExceededException;
