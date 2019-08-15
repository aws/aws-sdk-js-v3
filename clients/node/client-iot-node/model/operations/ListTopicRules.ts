import { ListTopicRulesInput } from "../shapes/ListTopicRulesInput";
import { ListTopicRulesOutput } from "../shapes/ListTopicRulesOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
