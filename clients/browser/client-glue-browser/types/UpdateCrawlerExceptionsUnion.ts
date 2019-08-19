import { InvalidInputException } from "./InvalidInputException";
import { VersionMismatchException } from "./VersionMismatchException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerRunningException } from "./CrawlerRunningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type UpdateCrawlerExceptionsUnion =
  | InvalidInputException
  | VersionMismatchException
  | EntityNotFoundException
  | CrawlerRunningException
  | OperationTimeoutException;
