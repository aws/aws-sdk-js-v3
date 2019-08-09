import { EntityNotFoundException } from "./EntityNotFoundException";
import { SchedulerNotRunningException } from "./SchedulerNotRunningException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type StopCrawlerScheduleExceptionsUnion =
  | EntityNotFoundException
  | SchedulerNotRunningException
  | SchedulerTransitioningException
  | OperationTimeoutException;
