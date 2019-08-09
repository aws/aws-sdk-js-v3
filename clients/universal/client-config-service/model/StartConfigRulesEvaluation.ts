import { StartConfigRulesEvaluationInput } from "./StartConfigRulesEvaluationInput";
import { StartConfigRulesEvaluationOutput } from "./StartConfigRulesEvaluationOutput";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
