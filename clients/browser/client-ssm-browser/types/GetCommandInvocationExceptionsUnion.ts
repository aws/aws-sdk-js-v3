import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidPluginName } from "./InvalidPluginName";
import { InvocationDoesNotExist } from "./InvocationDoesNotExist";
export type GetCommandInvocationExceptionsUnion =
  | InternalServerError
  | InvalidCommandId
  | InvalidInstanceId
  | InvalidPluginName
  | InvocationDoesNotExist;
