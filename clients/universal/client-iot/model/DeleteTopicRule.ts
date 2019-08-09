import { DeleteTopicRuleInput } from "./DeleteTopicRuleInput";
import { DeleteTopicRuleOutput } from "./DeleteTopicRuleOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTopicRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTopicRule",
  http: {
    method: "DELETE",
    requestUri: "/rules/{ruleName}"
  },
  input: {
    shape: DeleteTopicRuleInput
  },
  output: {
    shape: DeleteTopicRuleOutput
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
