import { AttachTypedLinkInput } from "./AttachTypedLinkInput";
import { AttachTypedLinkOutput } from "./AttachTypedLinkOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { FacetValidationException } from "./FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachTypedLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachTypedLink",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/attach"
  },
  input: {
    shape: AttachTypedLinkInput
  },
  output: {
    shape: AttachTypedLinkOutput
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
      shape: InvalidAttachmentException
    },
    {
      shape: ValidationException
    },
    {
      shape: FacetValidationException
    }
  ]
};
