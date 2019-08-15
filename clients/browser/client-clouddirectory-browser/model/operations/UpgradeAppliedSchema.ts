import { UpgradeAppliedSchemaInput } from "../shapes/UpgradeAppliedSchemaInput";
import { UpgradeAppliedSchemaOutput } from "../shapes/UpgradeAppliedSchemaOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleSchemaException } from "../shapes/IncompatibleSchemaException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAttachmentException } from "../shapes/InvalidAttachmentException";
import { SchemaAlreadyExistsException } from "../shapes/SchemaAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpgradeAppliedSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpgradeAppliedSchema",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/upgradeapplied"
  },
  input: {
    shape: UpgradeAppliedSchemaInput
  },
  output: {
    shape: UpgradeAppliedSchemaOutput
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
      shape: SchemaAlreadyExistsException
    }
  ]
};
