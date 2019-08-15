import { UpdateDatabaseInput } from "../shapes/UpdateDatabaseInput";
import { UpdateDatabaseOutput } from "../shapes/UpdateDatabaseOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDatabase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDatabase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDatabaseInput
  },
  output: {
    shape: UpdateDatabaseOutput
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
