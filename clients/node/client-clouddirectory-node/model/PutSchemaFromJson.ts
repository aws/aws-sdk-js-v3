import { PutSchemaFromJsonInput } from "./PutSchemaFromJsonInput";
import { PutSchemaFromJsonOutput } from "./PutSchemaFromJsonOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidSchemaDocException } from "./InvalidSchemaDocException";
import { InvalidRuleException } from "./InvalidRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
