import { GetTopicRuleInput } from "../shapes/GetTopicRuleInput";
import { GetTopicRuleOutput } from "../shapes/GetTopicRuleOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
