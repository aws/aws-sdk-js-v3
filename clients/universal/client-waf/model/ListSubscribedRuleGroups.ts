import { ListSubscribedRuleGroupsInput } from "./ListSubscribedRuleGroupsInput";
import { ListSubscribedRuleGroupsOutput } from "./ListSubscribedRuleGroupsOutput";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
