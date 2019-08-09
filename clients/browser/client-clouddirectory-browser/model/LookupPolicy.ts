import { LookupPolicyInput } from "./LookupPolicyInput";
import { LookupPolicyOutput } from "./LookupPolicyOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const LookupPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LookupPolicy",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/policy/lookup"
  },
  input: {
    shape: LookupPolicyInput
  },
  output: {
    shape: LookupPolicyOutput
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
      shape: DirectoryNotEnabledException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
