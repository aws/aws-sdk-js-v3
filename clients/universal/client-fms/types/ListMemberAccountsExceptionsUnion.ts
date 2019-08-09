import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type ListMemberAccountsExceptionsUnion =
  | ResourceNotFoundException
  | InternalErrorException;
