import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
import { StackInstanceNotFoundException } from "./StackInstanceNotFoundException";
export type UpdateStackSetExceptionsUnion =
  | StackSetNotFoundException
  | OperationInProgressException
  | OperationIdAlreadyExistsException
  | StaleRequestException
  | InvalidOperationException
  | StackInstanceNotFoundException;
