import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { VersionMismatchException } from "./VersionMismatchException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type UpdateCrawlerScheduleExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | VersionMismatchException
  | SchedulerTransitioningException
  | OperationTimeoutException;
