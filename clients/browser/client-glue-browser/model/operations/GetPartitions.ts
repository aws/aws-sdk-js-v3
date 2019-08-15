import { GetPartitionsInput } from "../shapes/GetPartitionsInput";
import { GetPartitionsOutput } from "../shapes/GetPartitionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPartitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPartitions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPartitionsInput
  },
  output: {
    shape: GetPartitionsOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
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
