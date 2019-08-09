import { UpdateDatabaseInput } from "./UpdateDatabaseInput";
import { UpdateDatabaseOutput } from "./UpdateDatabaseOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
