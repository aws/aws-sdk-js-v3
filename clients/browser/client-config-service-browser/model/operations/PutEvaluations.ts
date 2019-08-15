import { PutEvaluationsInput } from "../shapes/PutEvaluationsInput";
import { PutEvaluationsOutput } from "../shapes/PutEvaluationsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidResultTokenException } from "../shapes/InvalidResultTokenException";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEvaluations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEvaluations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutEvaluationsInput
  },
  output: {
    shape: PutEvaluationsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidResultTokenException
    },
    {
      shape: NoSuchConfigRuleException
    }
  ]
};
