import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransactionCanceledException } from "./TransactionCanceledException";
import { TransactionInProgressException } from "./TransactionInProgressException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
export type TransactWriteItemsExceptionsUnion =
  | ResourceNotFoundException
  | TransactionCanceledException
  | TransactionInProgressException
  | IdempotentParameterMismatchException
  | ProvisionedThroughputExceededException
  | InternalServerError;
