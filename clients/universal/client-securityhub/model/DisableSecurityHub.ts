import { DisableSecurityHubInput } from "./DisableSecurityHubInput";
import { DisableSecurityHubOutput } from "./DisableSecurityHubOutput";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableSecurityHub: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableSecurityHub",
  http: {
    method: "DELETE",
    requestUri: "/accounts"
  },
  input: {
    shape: DisableSecurityHubInput
  },
  output: {
    shape: DisableSecurityHubOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
