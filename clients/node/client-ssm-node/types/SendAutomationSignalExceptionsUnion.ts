import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { AutomationStepNotFoundException } from "./AutomationStepNotFoundException";
import { InvalidAutomationSignalException } from "./InvalidAutomationSignalException";
import { InternalServerError } from "./InternalServerError";
export type SendAutomationSignalExceptionsUnion =
  | AutomationExecutionNotFoundException
  | AutomationStepNotFoundException
  | InvalidAutomationSignalException
  | InternalServerError;
