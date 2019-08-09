import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidNextToken } from "./InvalidNextToken";
export type ListCommandsExceptionsUnion =
  | InternalServerError
  | InvalidCommandId
  | InvalidInstanceId
  | InvalidFilterKey
  | InvalidNextToken;
