import { InvalidOperationException } from "./InvalidOperationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type GetAdminAccountExceptionsUnion =
  | InvalidOperationException
  | ResourceNotFoundException
  | InternalErrorException;
