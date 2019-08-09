import { AttachObjectInput } from "./AttachObjectInput";
import { AttachObjectOutput } from "./AttachObjectOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { FacetValidationException } from "./FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachObject",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/object/attach"
  },
  input: {
    shape: AttachObjectInput
  },
  output: {
    shape: AttachObjectOutput
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
      shape: LinkNameAlreadyInUseException
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
