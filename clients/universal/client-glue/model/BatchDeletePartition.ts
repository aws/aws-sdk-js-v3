import { BatchDeletePartitionInput } from "./BatchDeletePartitionInput";
import { BatchDeletePartitionOutput } from "./BatchDeletePartitionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
