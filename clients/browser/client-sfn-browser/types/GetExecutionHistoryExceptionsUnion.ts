import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
import { InvalidToken } from "./InvalidToken";
export type GetExecutionHistoryExceptionsUnion =
  | ExecutionDoesNotExist
  | InvalidArn
  | InvalidToken;
