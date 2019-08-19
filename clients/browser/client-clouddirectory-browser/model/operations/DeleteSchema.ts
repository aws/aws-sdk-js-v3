import { DeleteSchemaInput } from "../shapes/DeleteSchemaInput";
import { DeleteSchemaOutput } from "../shapes/DeleteSchemaOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { StillContainsLinksException } from "../shapes/StillContainsLinksException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSchema",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/schema"
  },
  input: {
    shape: DeleteSchemaInput
  },
  output: {
    shape: DeleteSchemaOutput
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
      shape: StillContainsLinksException
    }
  ]
};
