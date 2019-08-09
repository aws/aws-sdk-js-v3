import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "./ItemCollectionSizeLimitExceededException";
import { RequestLimitExceeded } from "./RequestLimitExceeded";
import { InternalServerError } from "./InternalServerError";
export type BatchWriteItemExceptionsUnion =
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ItemCollectionSizeLimitExceededException
  | RequestLimitExceeded
  | InternalServerError;
