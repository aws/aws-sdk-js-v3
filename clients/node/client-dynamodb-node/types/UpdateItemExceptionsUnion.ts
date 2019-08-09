import { ConditionalCheckFailedException } from "./ConditionalCheckFailedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "./ItemCollectionSizeLimitExceededException";
import { TransactionConflictException } from "./TransactionConflictException";
import { RequestLimitExceeded } from "./RequestLimitExceeded";
import { InternalServerError } from "./InternalServerError";
export type UpdateItemExceptionsUnion =
  | ConditionalCheckFailedException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ItemCollectionSizeLimitExceededException
  | TransactionConflictException
  | RequestLimitExceeded
  | InternalServerError;
