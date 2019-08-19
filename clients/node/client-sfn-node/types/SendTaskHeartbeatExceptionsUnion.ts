import { TaskDoesNotExist } from "./TaskDoesNotExist";
import { InvalidToken } from "./InvalidToken";
import { TaskTimedOut } from "./TaskTimedOut";
export type SendTaskHeartbeatExceptionsUnion =
  | TaskDoesNotExist
  | InvalidToken
  | TaskTimedOut;
