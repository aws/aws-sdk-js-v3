import { SetRulePrioritiesInput } from "../shapes/SetRulePrioritiesInput";
import { SetRulePrioritiesOutput } from "../shapes/SetRulePrioritiesOutput";
import { RuleNotFoundException } from "../shapes/RuleNotFoundException";
import { PriorityInUseException } from "../shapes/PriorityInUseException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetRulePriorities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetRulePriorities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetRulePrioritiesInput
  },
  output: {
    shape: SetRulePrioritiesOutput,
    resultWrapper: "SetRulePrioritiesResult"
  },
  errors: [
    {
      shape: RuleNotFoundException
    },
    {
      shape: PriorityInUseException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
