import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { DuplicateRecordException } from "./DuplicateRecordException";
export type UpdateNotificationExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | DuplicateRecordException;
