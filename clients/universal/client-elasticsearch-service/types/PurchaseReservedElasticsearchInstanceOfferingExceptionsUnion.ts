import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
export type PurchaseReservedElasticsearchInstanceOfferingExceptionsUnion =
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | DisabledOperationException
  | ValidationException
  | InternalException;
