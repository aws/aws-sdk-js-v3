import { TransactGetItemsInput } from "./TransactGetItemsInput";
import { TransactGetItemsOutput } from "./TransactGetItemsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransactionCanceledException } from "./TransactionCanceledException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TransactGetItems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TransactGetItems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TransactGetItemsInput
  },
  output: {
    shape: TransactGetItemsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TransactionCanceledException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
