import { DisableTopicRuleInput } from "../shapes/DisableTopicRuleInput";
import { DisableTopicRuleOutput } from "../shapes/DisableTopicRuleOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ConflictingResourceUpdateException } from "../shapes/ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableTopicRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableTopicRule",
  http: {
    method: "POST",
    requestUri: "/rules/{ruleName}/disable"
  },
  input: {
    shape: DisableTopicRuleInput
  },
  output: {
    shape: DisableTopicRuleOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ConflictingResourceUpdateException
    }
  ]
};
