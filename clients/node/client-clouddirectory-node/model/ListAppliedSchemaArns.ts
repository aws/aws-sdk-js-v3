import { ListAppliedSchemaArnsInput } from "./ListAppliedSchemaArnsInput";
import { ListAppliedSchemaArnsOutput } from "./ListAppliedSchemaArnsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAppliedSchemaArns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAppliedSchemaArns",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/applied"
  },
  input: {
    shape: ListAppliedSchemaArnsInput
  },
  output: {
    shape: ListAppliedSchemaArnsOutput
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
