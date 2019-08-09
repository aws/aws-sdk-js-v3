import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
export type DeleteNotificationExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | NotFoundException;
