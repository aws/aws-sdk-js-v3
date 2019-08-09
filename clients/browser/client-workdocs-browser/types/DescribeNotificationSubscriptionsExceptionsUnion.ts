import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeNotificationSubscriptionsExceptionsUnion =
  | UnauthorizedResourceAccessException
  | EntityNotExistsException
  | ServiceUnavailableException;
