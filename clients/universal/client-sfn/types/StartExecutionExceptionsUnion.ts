import { ExecutionLimitExceeded } from "./ExecutionLimitExceeded";
import { ExecutionAlreadyExists } from "./ExecutionAlreadyExists";
import { InvalidArn } from "./InvalidArn";
import { InvalidExecutionInput } from "./InvalidExecutionInput";
import { InvalidName } from "./InvalidName";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
import { StateMachineDeleting } from "./StateMachineDeleting";
export type StartExecutionExceptionsUnion =
  | ExecutionLimitExceeded
  | ExecutionAlreadyExists
  | InvalidArn
  | InvalidExecutionInput
  | InvalidName
  | StateMachineDoesNotExist
  | StateMachineDeleting;
