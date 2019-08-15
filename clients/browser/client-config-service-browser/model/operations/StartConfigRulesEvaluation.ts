import { StartConfigRulesEvaluationInput } from "../shapes/StartConfigRulesEvaluationInput";
import { StartConfigRulesEvaluationOutput } from "../shapes/StartConfigRulesEvaluationOutput";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartConfigRulesEvaluation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartConfigRulesEvaluation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartConfigRulesEvaluationInput
  },
  output: {
    shape: StartConfigRulesEvaluationOutput
  },
  errors: [
    {
      shape: NoSuchConfigRuleException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
