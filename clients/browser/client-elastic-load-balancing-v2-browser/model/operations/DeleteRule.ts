import { DeleteRuleInput } from "../shapes/DeleteRuleInput";
import { DeleteRuleOutput } from "../shapes/DeleteRuleOutput";
import { RuleNotFoundException } from "../shapes/RuleNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
