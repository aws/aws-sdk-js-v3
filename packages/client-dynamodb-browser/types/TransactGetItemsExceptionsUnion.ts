import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransactionCanceledException } from "./TransactionCanceledException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
export type TransactGetItemsExceptionsUnion =
  | ResourceNotFoundException
  | TransactionCanceledException
  | ProvisionedThroughputExceededException
  | InternalServerError;
