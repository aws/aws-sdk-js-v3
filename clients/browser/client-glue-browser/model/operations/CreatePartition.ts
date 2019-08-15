import { CreatePartitionInput } from "../shapes/CreatePartitionInput";
import { CreatePartitionOutput } from "../shapes/CreatePartitionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePartitionInput
  },
  output: {
    shape: CreatePartitionOutput
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
