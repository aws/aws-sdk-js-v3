import { ListRulesInput } from "../shapes/ListRulesInput";
import { ListRulesOutput } from "../shapes/ListRulesOutput";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRulesInput
  },
  output: {
    shape: ListRulesOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
