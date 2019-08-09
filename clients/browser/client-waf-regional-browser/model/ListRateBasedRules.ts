import { ListRateBasedRulesInput } from "./ListRateBasedRulesInput";
import { ListRateBasedRulesOutput } from "./ListRateBasedRulesOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRateBasedRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRateBasedRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRateBasedRulesInput
  },
  output: {
    shape: ListRateBasedRulesOutput
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
