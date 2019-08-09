import { UpgradeAppliedSchemaInput } from "./UpgradeAppliedSchemaInput";
import { UpgradeAppliedSchemaOutput } from "./UpgradeAppliedSchemaOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { IncompatibleSchemaException } from "./IncompatibleSchemaException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { SchemaAlreadyExistsException } from "./SchemaAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
