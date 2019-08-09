import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { TooManySubscriptionsException } from "./TooManySubscriptionsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateNotificationSubscriptionExceptionsUnion =
  | UnauthorizedResourceAccessException
  | TooManySubscriptionsException
  | ServiceUnavailableException;
