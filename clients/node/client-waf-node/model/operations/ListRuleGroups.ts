import { ListRuleGroupsInput } from "../shapes/ListRuleGroupsInput";
import { ListRuleGroupsOutput } from "../shapes/ListRuleGroupsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRuleGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRuleGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRuleGroupsInput
  },
  output: {
    shape: ListRuleGroupsOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    }
  ]
};
