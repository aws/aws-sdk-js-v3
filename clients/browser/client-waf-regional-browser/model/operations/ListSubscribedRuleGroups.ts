import { ListSubscribedRuleGroupsInput } from "../shapes/ListSubscribedRuleGroupsInput";
import { ListSubscribedRuleGroupsOutput } from "../shapes/ListSubscribedRuleGroupsOutput";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSubscribedRuleGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSubscribedRuleGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSubscribedRuleGroupsInput
  },
  output: {
    shape: ListSubscribedRuleGroupsOutput
  },
  errors: [
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFInternalErrorException
    }
  ]
};
