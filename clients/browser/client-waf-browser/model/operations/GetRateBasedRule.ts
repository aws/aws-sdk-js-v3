import { GetRateBasedRuleInput } from "../shapes/GetRateBasedRuleInput";
import { GetRateBasedRuleOutput } from "../shapes/GetRateBasedRuleOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
