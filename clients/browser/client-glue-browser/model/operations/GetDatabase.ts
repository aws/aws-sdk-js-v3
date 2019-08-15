import { GetDatabaseInput } from "../shapes/GetDatabaseInput";
import { GetDatabaseOutput } from "../shapes/GetDatabaseOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDatabase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDatabase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDatabaseInput
  },
  output: {
    shape: GetDatabaseOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
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
