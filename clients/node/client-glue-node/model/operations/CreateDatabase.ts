import { CreateDatabaseInput } from "../shapes/CreateDatabaseInput";
import { CreateDatabaseOutput } from "../shapes/CreateDatabaseOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
