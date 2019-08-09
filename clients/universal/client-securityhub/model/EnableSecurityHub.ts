import { EnableSecurityHubInput } from "./EnableSecurityHubInput";
import { EnableSecurityHubOutput } from "./EnableSecurityHubOutput";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
