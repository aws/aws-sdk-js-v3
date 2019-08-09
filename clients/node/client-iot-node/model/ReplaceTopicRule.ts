import { ReplaceTopicRuleInput } from "./ReplaceTopicRuleInput";
import { ReplaceTopicRuleOutput } from "./ReplaceTopicRuleOutput";
import { SqlParseException } from "./SqlParseException";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
