import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
export type CreateTaskExceptionsUnion =
  | InvalidRequestException
  | InternalException;
