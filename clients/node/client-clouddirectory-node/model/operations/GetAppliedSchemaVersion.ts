import { GetAppliedSchemaVersionInput } from "../shapes/GetAppliedSchemaVersionInput";
import { GetAppliedSchemaVersionOutput } from "../shapes/GetAppliedSchemaVersionOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
