import { InternalErrorException } from "./InternalErrorException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
export type CreateSubscriptionExceptionsUnion =
  | InternalErrorException
  | ResourceAlreadyExistsException;
