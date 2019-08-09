import { DetachTypedLinkInput } from "./DetachTypedLinkInput";
import { DetachTypedLinkOutput } from "./DetachTypedLinkOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetValidationException } from "./FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachTypedLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachTypedLink",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/detach"
  },
  input: {
    shape: DetachTypedLinkInput
  },
  output: {
    shape: DetachTypedLinkOutput
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
      shape: FacetValidationException
    }
  ]
};
