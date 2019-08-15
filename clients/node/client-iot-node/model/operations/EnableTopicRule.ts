import { EnableTopicRuleInput } from "../shapes/EnableTopicRuleInput";
import { EnableTopicRuleOutput } from "../shapes/EnableTopicRuleOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ConflictingResourceUpdateException } from "../shapes/ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
