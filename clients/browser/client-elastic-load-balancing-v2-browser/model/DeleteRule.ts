import { DeleteRuleInput } from "./DeleteRuleInput";
import { DeleteRuleOutput } from "./DeleteRuleOutput";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRuleInput
  },
  output: {
    shape: DeleteRuleOutput,
    resultWrapper: "DeleteRuleResult"
  },
  errors: [
    {
      shape: RuleNotFoundException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
