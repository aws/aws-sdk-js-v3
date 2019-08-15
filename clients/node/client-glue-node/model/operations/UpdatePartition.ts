import { UpdatePartitionInput } from "../shapes/UpdatePartitionInput";
import { UpdatePartitionOutput } from "../shapes/UpdatePartitionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
