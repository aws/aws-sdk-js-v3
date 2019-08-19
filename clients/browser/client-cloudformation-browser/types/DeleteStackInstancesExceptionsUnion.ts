import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
export type DeleteStackInstancesExceptionsUnion =
  | StackSetNotFoundException
  | OperationInProgressException
  | OperationIdAlreadyExistsException
  | StaleRequestException
  | InvalidOperationException;
