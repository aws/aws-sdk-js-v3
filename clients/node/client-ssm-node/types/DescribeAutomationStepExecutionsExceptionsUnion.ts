import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InternalServerError } from "./InternalServerError";
export type DescribeAutomationStepExecutionsExceptionsUnion =
  | AutomationExecutionNotFoundException
  | InvalidNextToken
  | InvalidFilterKey
  | InvalidFilterValue
  | InternalServerError;
