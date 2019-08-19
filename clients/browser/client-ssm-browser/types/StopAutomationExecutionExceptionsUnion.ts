import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { InvalidAutomationStatusUpdateException } from "./InvalidAutomationStatusUpdateException";
import { InternalServerError } from "./InternalServerError";
export type StopAutomationExecutionExceptionsUnion =
  | AutomationExecutionNotFoundException
  | InvalidAutomationStatusUpdateException
  | InternalServerError;
