import { ListTargetsByRuleInput } from "./ListTargetsByRuleInput";
import { ListTargetsByRuleOutput } from "./ListTargetsByRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
