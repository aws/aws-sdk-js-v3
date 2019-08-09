import { UpdatePartitionInput } from "./UpdatePartitionInput";
import { UpdatePartitionOutput } from "./UpdatePartitionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePartitionInput
  },
  output: {
    shape: UpdatePartitionOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
