import { ListActivatedRulesInRuleGroupInput } from "../shapes/ListActivatedRulesInRuleGroupInput";
import { ListActivatedRulesInRuleGroupOutput } from "../shapes/ListActivatedRulesInRuleGroupOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
