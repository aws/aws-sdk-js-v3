import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerRunningException } from "./CrawlerRunningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type StartCrawlerExceptionsUnion =
  | EntityNotFoundException
  | CrawlerRunningException
  | OperationTimeoutException;
