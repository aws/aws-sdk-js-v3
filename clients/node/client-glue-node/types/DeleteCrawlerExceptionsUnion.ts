import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerRunningException } from "./CrawlerRunningException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type DeleteCrawlerExceptionsUnion =
  | EntityNotFoundException
  | CrawlerRunningException
  | SchedulerTransitioningException
  | OperationTimeoutException;
