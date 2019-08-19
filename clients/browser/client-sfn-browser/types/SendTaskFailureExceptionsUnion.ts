import { TaskDoesNotExist } from "./TaskDoesNotExist";
import { InvalidToken } from "./InvalidToken";
import { TaskTimedOut } from "./TaskTimedOut";
export type SendTaskFailureExceptionsUnion =
  | TaskDoesNotExist
  | InvalidToken
  | TaskTimedOut;
