import { InvalidOperationException } from "./InvalidOperationException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type AssociateAdminAccountExceptionsUnion =
  | InvalidOperationException
  | InvalidInputException
  | ResourceNotFoundException
  | InternalErrorException;
