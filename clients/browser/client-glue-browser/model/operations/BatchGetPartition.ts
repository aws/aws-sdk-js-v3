import { BatchGetPartitionInput } from "../shapes/BatchGetPartitionInput";
import { BatchGetPartitionOutput } from "../shapes/BatchGetPartitionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetPartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetPartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetPartitionInput
  },
  output: {
    shape: BatchGetPartitionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
