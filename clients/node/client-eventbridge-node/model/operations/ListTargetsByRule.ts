import { ListTargetsByRuleInput } from "../shapes/ListTargetsByRuleInput";
import { ListTargetsByRuleOutput } from "../shapes/ListTargetsByRuleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTargetsByRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTargetsByRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTargetsByRuleInput
  },
  output: {
    shape: ListTargetsByRuleOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalException
    }
  ]
};
