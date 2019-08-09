import { GetPartitionInput } from "./GetPartitionInput";
import { GetPartitionOutput } from "./GetPartitionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPartitionInput
  },
  output: {
    shape: GetPartitionOutput
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
