import { SetRulePrioritiesInput } from "./SetRulePrioritiesInput";
import { SetRulePrioritiesOutput } from "./SetRulePrioritiesOutput";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { PriorityInUseException } from "./PriorityInUseException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
