import { GetSchemaAsJsonInput } from "./GetSchemaAsJsonInput";
import { GetSchemaAsJsonOutput } from "./GetSchemaAsJsonOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSchemaAsJson: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSchemaAsJson",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/json"
  },
  input: {
    shape: GetSchemaAsJsonInput
  },
  output: {
    shape: GetSchemaAsJsonOutput
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
      shape: ValidationException
    }
  ]
};
