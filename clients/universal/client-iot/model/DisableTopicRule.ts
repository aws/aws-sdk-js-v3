import { DisableTopicRuleInput } from "./DisableTopicRuleInput";
import { DisableTopicRuleOutput } from "./DisableTopicRuleOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
