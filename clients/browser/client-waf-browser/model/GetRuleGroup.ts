import { GetRuleGroupInput } from "./GetRuleGroupInput";
import { GetRuleGroupOutput } from "./GetRuleGroupOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRuleGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRuleGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRuleGroupInput
  },
  output: {
    shape: GetRuleGroupOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
