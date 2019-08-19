import { CreateSchemaInput } from "../shapes/CreateSchemaInput";
import { CreateSchemaOutput } from "../shapes/CreateSchemaOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { SchemaAlreadyExistsException } from "../shapes/SchemaAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSchema",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/create"
  },
  input: {
    shape: CreateSchemaInput
  },
  output: {
    shape: CreateSchemaOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: RetryableConflictException
    },
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: SchemaAlreadyExistsException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
