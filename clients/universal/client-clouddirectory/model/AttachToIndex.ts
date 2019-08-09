import { AttachToIndexInput } from "./AttachToIndexInput";
import { AttachToIndexOutput } from "./AttachToIndexOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { IndexedAttributeMissingException } from "./IndexedAttributeMissingException";
import { NotIndexException } from "./NotIndexException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
