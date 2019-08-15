import { ListRulesInput } from "../shapes/ListRulesInput";
import { ListRulesOutput } from "../shapes/ListRulesOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
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
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    }
  ]
};
