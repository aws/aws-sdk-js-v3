import { LookupPolicyInput } from "../shapes/LookupPolicyInput";
import { LookupPolicyOutput } from "../shapes/LookupPolicyOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
