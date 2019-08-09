import { BatchGetPartitionInput } from "./BatchGetPartitionInput";
import { BatchGetPartitionOutput } from "./BatchGetPartitionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InternalServiceException } from "./InternalServiceException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
