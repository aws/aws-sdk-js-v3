import { GetDatabaseInput } from "./GetDatabaseInput";
import { GetDatabaseOutput } from "./GetDatabaseOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
