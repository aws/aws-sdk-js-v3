import { ListPolicyAttachmentsInput } from "./ListPolicyAttachmentsInput";
import { ListPolicyAttachmentsOutput } from "./ListPolicyAttachmentsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotPolicyException } from "./NotPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPolicyAttachments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicyAttachments",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/policy/attachment"
  },
  input: {
    shape: ListPolicyAttachmentsInput
  },
  output: {
    shape: ListPolicyAttachmentsOutput
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
      shape: InvalidNextTokenException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotPolicyException
    }
  ]
};
