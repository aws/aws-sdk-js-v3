import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
export type ListPoliciesExceptionsUnion =
  | ResourceNotFoundException
  | InvalidOperationException
  | LimitExceededException
  | InternalErrorException;
