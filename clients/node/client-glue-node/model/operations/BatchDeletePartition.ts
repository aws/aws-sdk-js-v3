import { BatchDeletePartitionInput } from "../shapes/BatchDeletePartitionInput";
import { BatchDeletePartitionOutput } from "../shapes/BatchDeletePartitionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeletePartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeletePartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeletePartitionInput
  },
  output: {
    shape: BatchDeletePartitionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
