import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UpdateBusinessReportScheduleExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
