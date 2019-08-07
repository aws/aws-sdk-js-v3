import { ConditionalCheckFailedException } from "./ConditionalCheckFailedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "./ItemCollectionSizeLimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type PutItemExceptionsUnion =
  | ConditionalCheckFailedException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ItemCollectionSizeLimitExceededException
  | InternalServerError;
