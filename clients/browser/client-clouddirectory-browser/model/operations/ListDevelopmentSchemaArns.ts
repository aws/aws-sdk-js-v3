import { ListDevelopmentSchemaArnsInput } from "../shapes/ListDevelopmentSchemaArnsInput";
import { ListDevelopmentSchemaArnsOutput } from "../shapes/ListDevelopmentSchemaArnsOutput";
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

export const ListDevelopmentSchemaArns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevelopmentSchemaArns",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/development"
  },
  input: {
    shape: ListDevelopmentSchemaArnsInput
  },
  output: {
    shape: ListDevelopmentSchemaArnsOutput
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
