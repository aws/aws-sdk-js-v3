import { GetAppliedSchemaVersionInput } from "./GetAppliedSchemaVersionInput";
import { GetAppliedSchemaVersionOutput } from "./GetAppliedSchemaVersionOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAppliedSchemaVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAppliedSchemaVersion",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/getappliedschema"
  },
  input: {
    shape: GetAppliedSchemaVersionInput
  },
  output: {
    shape: GetAppliedSchemaVersionOutput
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
    }
  ]
};
