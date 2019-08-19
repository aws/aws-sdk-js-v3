import { GetRuleInput } from "../shapes/GetRuleInput";
import { GetRuleOutput } from "../shapes/GetRuleOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRuleInput
  },
  output: {
    shape: GetRuleOutput
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
