import { CreateTableInput } from "../shapes/CreateTableInput";
import { CreateTableOutput } from "../shapes/CreateTableOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
