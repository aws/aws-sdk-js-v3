import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { CreationLimitExceededException } from "./CreationLimitExceededException";
import { DuplicateRecordException } from "./DuplicateRecordException";
export type CreateBudgetExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | CreationLimitExceededException
  | DuplicateRecordException;
