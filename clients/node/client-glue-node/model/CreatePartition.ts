import { CreatePartitionInput } from "./CreatePartitionInput";
import { CreatePartitionOutput } from "./CreatePartitionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
