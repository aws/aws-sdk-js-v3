import { GetPartitionsInput } from "./GetPartitionsInput";
import { GetPartitionsOutput } from "./GetPartitionsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InternalServiceException } from "./InternalServiceException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
