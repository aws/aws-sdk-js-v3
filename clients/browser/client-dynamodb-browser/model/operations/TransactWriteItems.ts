import { TransactWriteItemsInput } from "../shapes/TransactWriteItemsInput";
import { TransactWriteItemsOutput } from "../shapes/TransactWriteItemsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TransactionCanceledException } from "../shapes/TransactionCanceledException";
import { TransactionInProgressException } from "../shapes/TransactionInProgressException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
