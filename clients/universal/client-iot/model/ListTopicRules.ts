import { ListTopicRulesInput } from "./ListTopicRulesInput";
import { ListTopicRulesOutput } from "./ListTopicRulesOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTopicRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTopicRules",
  http: {
    method: "GET",
    requestUri: "/rules"
  },
  input: {
    shape: ListTopicRulesInput
  },
  output: {
    shape: ListTopicRulesOutput
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
    }
  ]
};
