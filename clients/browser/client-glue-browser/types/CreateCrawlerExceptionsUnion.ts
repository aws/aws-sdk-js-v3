import { InvalidInputException } from "./InvalidInputException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
export type CreateCrawlerExceptionsUnion =
  | InvalidInputException
  | AlreadyExistsException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException;
