import { ListActivatedRulesInRuleGroupInput } from "./ListActivatedRulesInRuleGroupInput";
import { ListActivatedRulesInRuleGroupOutput } from "./ListActivatedRulesInRuleGroupOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListActivatedRulesInRuleGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListActivatedRulesInRuleGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListActivatedRulesInRuleGroupInput
  },
  output: {
    shape: ListActivatedRulesInRuleGroupOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFInvalidParameterException
    }
  ]
};
