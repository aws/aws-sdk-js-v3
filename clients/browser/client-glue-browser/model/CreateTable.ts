import { CreateTableInput } from "./CreateTableInput";
import { CreateTableOutput } from "./CreateTableOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTableInput
  },
  output: {
    shape: CreateTableOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
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
