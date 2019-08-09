import { GetTopicRuleInput } from "./GetTopicRuleInput";
import { GetTopicRuleOutput } from "./GetTopicRuleOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTopicRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTopicRule",
  http: {
    method: "GET",
    requestUri: "/rules/{ruleName}"
  },
  input: {
    shape: GetTopicRuleInput
  },
  output: {
    shape: GetTopicRuleOutput
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
    }
  ]
};
