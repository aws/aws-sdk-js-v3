import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { ValidationException } from "./ValidationException";
import { DisabledOperationException } from "./DisabledOperationException";
export type DescribeReservedElasticsearchInstancesExceptionsUnion =
  | ResourceNotFoundException
  | InternalException
  | ValidationException
  | DisabledOperationException;
