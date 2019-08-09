import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { DuplicateInstanceId } from "./DuplicateInstanceId";
export type CancelCommandExceptionsUnion =
  | InternalServerError
  | InvalidCommandId
  | InvalidInstanceId
  | DuplicateInstanceId;
