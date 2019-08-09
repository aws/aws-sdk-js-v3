import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidTypeException } from "./InvalidTypeException";
export type GetPolicyExceptionsUnion =
  | ResourceNotFoundException
  | InvalidOperationException
  | InternalErrorException
  | InvalidTypeException;
