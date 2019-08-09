import { AttachPolicyInput } from "./AttachPolicyInput";
import { AttachPolicyOutput } from "./AttachPolicyOutput";
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

export const AttachPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachPolicy",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/policy/attach"
  },
  input: {
    shape: AttachPolicyInput
  },
  output: {
    shape: AttachPolicyOutput
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
