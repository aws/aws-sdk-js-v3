import { GetRateBasedRuleInput } from "./GetRateBasedRuleInput";
import { GetRateBasedRuleOutput } from "./GetRateBasedRuleOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRateBasedRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRateBasedRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRateBasedRuleInput
  },
  output: {
    shape: GetRateBasedRuleOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
