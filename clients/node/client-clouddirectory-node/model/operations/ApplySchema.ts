import { ApplySchemaInput } from "../shapes/ApplySchemaInput";
import { ApplySchemaOutput } from "../shapes/ApplySchemaOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { SchemaAlreadyExistsException } from "../shapes/SchemaAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAttachmentException } from "../shapes/InvalidAttachmentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ApplySchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApplySchema",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/apply"
  },
  input: {
    shape: ApplySchemaInput
  },
  output: {
    shape: ApplySchemaOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAttachmentException
    }
  ]
};
