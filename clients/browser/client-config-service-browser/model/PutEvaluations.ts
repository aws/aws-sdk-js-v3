import { PutEvaluationsInput } from "./PutEvaluationsInput";
import { PutEvaluationsOutput } from "./PutEvaluationsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidResultTokenException } from "./InvalidResultTokenException";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
