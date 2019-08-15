import { AttachObjectInput } from "../shapes/AttachObjectInput";
import { AttachObjectOutput } from "../shapes/AttachObjectOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "../shapes/LinkNameAlreadyInUseException";
import { InvalidAttachmentException } from "../shapes/InvalidAttachmentException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
