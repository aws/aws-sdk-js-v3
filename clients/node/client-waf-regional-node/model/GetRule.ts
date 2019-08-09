import { GetRuleInput } from "./GetRuleInput";
import { GetRuleOutput } from "./GetRuleOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
