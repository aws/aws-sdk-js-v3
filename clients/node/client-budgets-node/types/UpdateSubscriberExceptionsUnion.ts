import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { DuplicateRecordException } from "./DuplicateRecordException";
export type UpdateSubscriberExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | DuplicateRecordException;
