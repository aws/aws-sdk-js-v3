import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { CreationLimitExceededException } from "./CreationLimitExceededException";
import { DuplicateRecordException } from "./DuplicateRecordException";
import { NotFoundException } from "./NotFoundException";
export type CreateSubscriberExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | CreationLimitExceededException
  | DuplicateRecordException
  | NotFoundException;
