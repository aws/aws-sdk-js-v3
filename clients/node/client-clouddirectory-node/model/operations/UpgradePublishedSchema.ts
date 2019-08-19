import { UpgradePublishedSchemaInput } from "../shapes/UpgradePublishedSchemaInput";
import { UpgradePublishedSchemaOutput } from "../shapes/UpgradePublishedSchemaOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleSchemaException } from "../shapes/IncompatibleSchemaException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAttachmentException } from "../shapes/InvalidAttachmentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
