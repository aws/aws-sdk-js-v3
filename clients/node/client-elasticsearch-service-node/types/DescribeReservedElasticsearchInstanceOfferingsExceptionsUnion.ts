import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { DisabledOperationException } from "./DisabledOperationException";
import { InternalException } from "./InternalException";
export type DescribeReservedElasticsearchInstanceOfferingsExceptionsUnion =
  | ResourceNotFoundException
  | ValidationException
  | DisabledOperationException
  | InternalException;
