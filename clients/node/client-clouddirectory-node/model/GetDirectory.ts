import { GetDirectoryInput } from "./GetDirectoryInput";
import { GetDirectoryOutput } from "./GetDirectoryOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
