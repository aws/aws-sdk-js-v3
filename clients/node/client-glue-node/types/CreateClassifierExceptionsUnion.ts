import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type CreateClassifierExceptionsUnion =
  | AlreadyExistsException
  | InvalidInputException
  | OperationTimeoutException;
