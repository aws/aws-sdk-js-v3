import { InvalidArn } from "./InvalidArn";
import { InvalidDefinition } from "./InvalidDefinition";
import { InvalidName } from "./InvalidName";
import { StateMachineAlreadyExists } from "./StateMachineAlreadyExists";
import { StateMachineDeleting } from "./StateMachineDeleting";
import { StateMachineLimitExceeded } from "./StateMachineLimitExceeded";
import { TooManyTags } from "./TooManyTags";
export type CreateStateMachineExceptionsUnion =
  | InvalidArn
  | InvalidDefinition
  | InvalidName
  | StateMachineAlreadyExists
  | StateMachineDeleting
  | StateMachineLimitExceeded
  | TooManyTags;
