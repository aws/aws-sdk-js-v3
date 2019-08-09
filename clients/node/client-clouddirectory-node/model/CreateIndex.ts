import { CreateIndexInput } from "./CreateIndexInput";
import { CreateIndexOutput } from "./CreateIndexOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetValidationException } from "./FacetValidationException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { UnsupportedIndexTypeException } from "./UnsupportedIndexTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIndex",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/index"
  },
  input: {
    shape: CreateIndexInput
  },
  output: {
    shape: CreateIndexOutput
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
    },
    {
      shape: LinkNameAlreadyInUseException
    },
    {
      shape: UnsupportedIndexTypeException
    }
  ]
};
