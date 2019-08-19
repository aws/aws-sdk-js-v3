import { TaskDoesNotExist } from "./TaskDoesNotExist";
import { InvalidOutput } from "./InvalidOutput";
import { InvalidToken } from "./InvalidToken";
import { TaskTimedOut } from "./TaskTimedOut";
export type SendTaskSuccessExceptionsUnion =
  | TaskDoesNotExist
  | InvalidOutput
  | InvalidToken
  | TaskTimedOut;
