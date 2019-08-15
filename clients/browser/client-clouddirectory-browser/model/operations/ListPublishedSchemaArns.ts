import { ListPublishedSchemaArnsInput } from "../shapes/ListPublishedSchemaArnsInput";
import { ListPublishedSchemaArnsOutput } from "../shapes/ListPublishedSchemaArnsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPublishedSchemaArns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPublishedSchemaArns",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/published"
  },
  input: {
    shape: ListPublishedSchemaArnsInput
  },
  output: {
    shape: ListPublishedSchemaArnsOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
