import { DisableSecurityHubInput } from "../shapes/DisableSecurityHubInput";
import { DisableSecurityHubOutput } from "../shapes/DisableSecurityHubOutput";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
