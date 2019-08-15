import { PutSchemaFromJsonInput } from "../shapes/PutSchemaFromJsonInput";
import { PutSchemaFromJsonOutput } from "../shapes/PutSchemaFromJsonOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidSchemaDocException } from "../shapes/InvalidSchemaDocException";
import { InvalidRuleException } from "../shapes/InvalidRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutSchemaFromJson: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutSchemaFromJson",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/json"
  },
  input: {
    shape: PutSchemaFromJsonInput
  },
  output: {
    shape: PutSchemaFromJsonOutput
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
      shape: InvalidSchemaDocException
    },
    {
      shape: InvalidRuleException
    }
  ]
};
