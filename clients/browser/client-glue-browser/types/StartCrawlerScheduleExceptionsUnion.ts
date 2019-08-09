import { EntityNotFoundException } from "./EntityNotFoundException";
import { SchedulerRunningException } from "./SchedulerRunningException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { NoScheduleException } from "./NoScheduleException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type StartCrawlerScheduleExceptionsUnion =
  | EntityNotFoundException
  | SchedulerRunningException
  | SchedulerTransitioningException
  | NoScheduleException
  | OperationTimeoutException;
