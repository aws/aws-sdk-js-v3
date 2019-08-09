import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteBusinessReportScheduleExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
