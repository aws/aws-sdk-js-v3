import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateStackInstancesExceptionsUnion =
  | StackSetNotFoundException
  | OperationInProgressException
  | OperationIdAlreadyExistsException
  | StaleRequestException
  | InvalidOperationException
  | LimitExceededException;
