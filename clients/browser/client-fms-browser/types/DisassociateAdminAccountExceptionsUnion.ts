import { InvalidOperationException } from "./InvalidOperationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type DisassociateAdminAccountExceptionsUnion =
  | InvalidOperationException
  | ResourceNotFoundException
  | InternalErrorException;
