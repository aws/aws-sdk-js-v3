import { GetPartitionInput } from "../shapes/GetPartitionInput";
import { GetPartitionOutput } from "../shapes/GetPartitionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
