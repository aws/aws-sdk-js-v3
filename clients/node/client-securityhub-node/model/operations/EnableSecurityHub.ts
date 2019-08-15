import { EnableSecurityHubInput } from "../shapes/EnableSecurityHubInput";
import { EnableSecurityHubOutput } from "../shapes/EnableSecurityHubOutput";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableSecurityHub: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableSecurityHub",
  http: {
    method: "POST",
    requestUri: "/accounts"
  },
  input: {
    shape: EnableSecurityHubInput
  },
  output: {
    shape: EnableSecurityHubOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
