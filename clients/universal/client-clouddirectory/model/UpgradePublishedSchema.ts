import { UpgradePublishedSchemaInput } from "./UpgradePublishedSchemaInput";
import { UpgradePublishedSchemaOutput } from "./UpgradePublishedSchemaOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { IncompatibleSchemaException } from "./IncompatibleSchemaException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpgradePublishedSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpgradePublishedSchema",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/upgradepublished"
  },
  input: {
    shape: UpgradePublishedSchemaInput
  },
  output: {
    shape: UpgradePublishedSchemaOutput
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
      shape: IncompatibleSchemaException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAttachmentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
