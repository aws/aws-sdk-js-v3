import { AttachPolicyInput } from "../shapes/AttachPolicyInput";
import { AttachPolicyOutput } from "../shapes/AttachPolicyOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotPolicyException } from "../shapes/NotPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
