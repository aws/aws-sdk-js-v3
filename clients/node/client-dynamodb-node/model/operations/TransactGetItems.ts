import { TransactGetItemsInput } from "../shapes/TransactGetItemsInput";
import { TransactGetItemsOutput } from "../shapes/TransactGetItemsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TransactionCanceledException } from "../shapes/TransactionCanceledException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
