import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { CreationLimitExceededException } from "./CreationLimitExceededException";
import { DuplicateRecordException } from "./DuplicateRecordException";
export type CreateNotificationExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | CreationLimitExceededException
  | DuplicateRecordException;
