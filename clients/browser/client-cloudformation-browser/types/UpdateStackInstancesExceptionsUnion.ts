import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { StackInstanceNotFoundException } from "./StackInstanceNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
export type UpdateStackInstancesExceptionsUnion =
  | StackSetNotFoundException
  | StackInstanceNotFoundException
  | OperationInProgressException
  | OperationIdAlreadyExistsException
  | StaleRequestException
  | InvalidOperationException;
