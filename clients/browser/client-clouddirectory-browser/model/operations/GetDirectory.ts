import { GetDirectoryInput } from "../shapes/GetDirectoryInput";
import { GetDirectoryOutput } from "../shapes/GetDirectoryOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDirectory",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/directory/get"
  },
  input: {
    shape: GetDirectoryInput
  },
  output: {
    shape: GetDirectoryOutput
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
    }
  ]
};
