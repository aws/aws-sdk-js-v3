import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidTypeException } from "./InvalidTypeException";
export type UpdateServiceAccessPoliciesExceptionsUnion =
  | BaseException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidTypeException;
