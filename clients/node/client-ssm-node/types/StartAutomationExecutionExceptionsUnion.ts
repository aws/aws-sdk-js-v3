import { AutomationDefinitionNotFoundException } from "./AutomationDefinitionNotFoundException";
import { InvalidAutomationExecutionParametersException } from "./InvalidAutomationExecutionParametersException";
import { AutomationExecutionLimitExceededException } from "./AutomationExecutionLimitExceededException";
import { AutomationDefinitionVersionNotFoundException } from "./AutomationDefinitionVersionNotFoundException";
import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { InvalidTarget } from "./InvalidTarget";
import { InternalServerError } from "./InternalServerError";
export type StartAutomationExecutionExceptionsUnion =
  | AutomationDefinitionNotFoundException
  | InvalidAutomationExecutionParametersException
  | AutomationExecutionLimitExceededException
  | AutomationDefinitionVersionNotFoundException
  | IdempotentParameterMismatch
  | InvalidTarget
  | InternalServerError;
