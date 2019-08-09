import { CreateDatabaseInput } from "./CreateDatabaseInput";
import { CreateDatabaseOutput } from "./CreateDatabaseOutput";
import { InvalidInputException } from "./InvalidInputException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDatabase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDatabase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDatabaseInput
  },
  output: {
    shape: CreateDatabaseOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: ResourceNumberLimitExceededException
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
