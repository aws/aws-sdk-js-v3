import { CreateTopicRuleInput } from "./CreateTopicRuleInput";
import { CreateTopicRuleOutput } from "./CreateTopicRuleOutput";
import { SqlParseException } from "./SqlParseException";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
