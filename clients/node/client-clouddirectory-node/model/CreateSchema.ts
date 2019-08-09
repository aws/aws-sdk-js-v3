import { CreateSchemaInput } from "./CreateSchemaInput";
import { CreateSchemaOutput } from "./CreateSchemaOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { SchemaAlreadyExistsException } from "./SchemaAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
