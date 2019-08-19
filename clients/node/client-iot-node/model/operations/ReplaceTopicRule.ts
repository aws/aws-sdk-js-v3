import { ReplaceTopicRuleInput } from "../shapes/ReplaceTopicRuleInput";
import { ReplaceTopicRuleOutput } from "../shapes/ReplaceTopicRuleOutput";
import { SqlParseException } from "../shapes/SqlParseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ConflictingResourceUpdateException } from "../shapes/ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReplaceTopicRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceTopicRule",
  http: {
    method: "PATCH",
    requestUri: "/rules/{ruleName}"
  },
  input: {
    shape: ReplaceTopicRuleInput
  },
  output: {
    shape: ReplaceTopicRuleOutput
  },
  errors: [
    {
      shape: SqlParseException
    },
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
