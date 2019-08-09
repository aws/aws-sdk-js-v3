import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type GetAutomationExecutionExceptionsUnion =
  | AutomationExecutionNotFoundException
  | InternalServerError;
