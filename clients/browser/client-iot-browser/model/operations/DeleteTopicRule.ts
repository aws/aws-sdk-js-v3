import { DeleteTopicRuleInput } from "../shapes/DeleteTopicRuleInput";
import { DeleteTopicRuleOutput } from "../shapes/DeleteTopicRuleOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ConflictingResourceUpdateException } from "../shapes/ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
