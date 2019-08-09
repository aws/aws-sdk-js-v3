import { TransactWriteItemsInput } from "./TransactWriteItemsInput";
import { TransactWriteItemsOutput } from "./TransactWriteItemsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransactionCanceledException } from "./TransactionCanceledException";
import { TransactionInProgressException } from "./TransactionInProgressException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TransactWriteItems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TransactWriteItems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TransactWriteItemsInput
  },
  output: {
    shape: TransactWriteItemsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TransactionCanceledException
    },
    {
      shape: TransactionInProgressException
    },
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
