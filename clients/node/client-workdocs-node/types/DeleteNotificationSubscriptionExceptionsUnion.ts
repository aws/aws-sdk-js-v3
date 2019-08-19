import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ProhibitedStateException } from "./ProhibitedStateException";
export type DeleteNotificationSubscriptionExceptionsUnion =
  | UnauthorizedResourceAccessException
  | EntityNotExistsException
  | ServiceUnavailableException
  | ProhibitedStateException;
