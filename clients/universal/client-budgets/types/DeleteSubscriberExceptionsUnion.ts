import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
export type DeleteSubscriberExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException;
