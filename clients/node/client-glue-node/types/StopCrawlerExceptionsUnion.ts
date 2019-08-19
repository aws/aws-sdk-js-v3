import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerNotRunningException } from "./CrawlerNotRunningException";
import { CrawlerStoppingException } from "./CrawlerStoppingException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type StopCrawlerExceptionsUnion =
  | EntityNotFoundException
  | CrawlerNotRunningException
  | CrawlerStoppingException
  | OperationTimeoutException;
