import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
export type DeletePolicyExceptionsUnion =
  | ResourceNotFoundException
  | InvalidOperationException
  | InternalErrorException;
