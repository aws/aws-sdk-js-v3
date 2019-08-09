import { EnableTopicRuleInput } from "./EnableTopicRuleInput";
import { EnableTopicRuleOutput } from "./EnableTopicRuleOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableTopicRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableTopicRule",
  http: {
    method: "POST",
    requestUri: "/rules/{ruleName}/enable"
  },
  input: {
    shape: EnableTopicRuleInput
  },
  output: {
    shape: EnableTopicRuleOutput
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
