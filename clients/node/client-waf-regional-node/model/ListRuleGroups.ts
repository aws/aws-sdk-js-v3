import { ListRuleGroupsInput } from "./ListRuleGroupsInput";
import { ListRuleGroupsOutput } from "./ListRuleGroupsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
