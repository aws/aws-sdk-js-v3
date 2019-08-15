import { BatchCreatePartitionInput } from "../shapes/BatchCreatePartitionInput";
import { BatchCreatePartitionOutput } from "../shapes/BatchCreatePartitionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchCreatePartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchCreatePartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchCreatePartitionInput
  },
  output: {
    shape: BatchCreatePartitionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
