import { CreateTopicRuleInput } from "../shapes/CreateTopicRuleInput";
import { CreateTopicRuleOutput } from "../shapes/CreateTopicRuleOutput";
import { SqlParseException } from "../shapes/SqlParseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ConflictingResourceUpdateException } from "../shapes/ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTopicRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTopicRule",
  http: {
    method: "POST",
    requestUri: "/rules/{ruleName}"
  },
  input: {
    shape: CreateTopicRuleInput
  },
  output: {
    shape: CreateTopicRuleOutput
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
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ConflictingResourceUpdateException
    }
  ]
};
