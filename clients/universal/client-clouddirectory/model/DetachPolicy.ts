import { DetachPolicyInput } from "./DetachPolicyInput";
import { DetachPolicyOutput } from "./DetachPolicyOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotPolicyException } from "./NotPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachPolicy",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/policy/detach"
  },
  input: {
    shape: DetachPolicyInput
  },
  output: {
    shape: DetachPolicyOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: NotPolicyException
    }
  ]
};
