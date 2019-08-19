import { AttachToIndexInput } from "../shapes/AttachToIndexInput";
import { AttachToIndexOutput } from "../shapes/AttachToIndexOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { InvalidAttachmentException } from "../shapes/InvalidAttachmentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "../shapes/LinkNameAlreadyInUseException";
import { IndexedAttributeMissingException } from "../shapes/IndexedAttributeMissingException";
import { NotIndexException } from "../shapes/NotIndexException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachToIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachToIndex",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/index/attach"
  },
  input: {
    shape: AttachToIndexInput
  },
  output: {
    shape: AttachToIndexOutput
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
      shape: InvalidAttachmentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LinkNameAlreadyInUseException
    },
    {
      shape: IndexedAttributeMissingException
    },
    {
      shape: NotIndexException
    }
  ]
};
