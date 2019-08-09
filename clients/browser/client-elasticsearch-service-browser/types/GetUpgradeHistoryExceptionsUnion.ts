import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
export type GetUpgradeHistoryExceptionsUnion =
  | BaseException
  | ResourceNotFoundException
  | DisabledOperationException
  | ValidationException
  | InternalException;
