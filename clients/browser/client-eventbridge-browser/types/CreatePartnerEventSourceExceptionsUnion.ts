import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
export type CreatePartnerEventSourceExceptionsUnion =
  | ResourceAlreadyExistsException
  | InternalException
  | ConcurrentModificationException
  | LimitExceededException;
