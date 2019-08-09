import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
export type DeleteNotificationChannelExceptionsUnion =
  | ResourceNotFoundException
  | InvalidOperationException
  | InternalErrorException;
