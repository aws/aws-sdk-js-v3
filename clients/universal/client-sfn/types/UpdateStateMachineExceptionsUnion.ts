import { InvalidArn } from "./InvalidArn";
import { InvalidDefinition } from "./InvalidDefinition";
import { MissingRequiredParameter } from "./MissingRequiredParameter";
import { StateMachineDeleting } from "./StateMachineDeleting";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
export type UpdateStateMachineExceptionsUnion =
  | InvalidArn
  | InvalidDefinition
  | MissingRequiredParameter
  | StateMachineDeleting
  | StateMachineDoesNotExist;
