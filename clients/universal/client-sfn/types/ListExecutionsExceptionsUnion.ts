import { InvalidArn } from "./InvalidArn";
import { InvalidToken } from "./InvalidToken";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
export type ListExecutionsExceptionsUnion =
  | InvalidArn
  | InvalidToken
  | StateMachineDoesNotExist;
