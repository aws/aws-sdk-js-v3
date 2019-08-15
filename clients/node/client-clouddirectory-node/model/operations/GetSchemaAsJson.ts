import { GetSchemaAsJsonInput } from "../shapes/GetSchemaAsJsonInput";
import { GetSchemaAsJsonOutput } from "../shapes/GetSchemaAsJsonOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
