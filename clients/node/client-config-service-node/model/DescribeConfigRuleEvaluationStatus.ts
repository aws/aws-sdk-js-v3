import { DescribeConfigRuleEvaluationStatusInput } from "./DescribeConfigRuleEvaluationStatusInput";
import { DescribeConfigRuleEvaluationStatusOutput } from "./DescribeConfigRuleEvaluationStatusOutput";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConfigRuleEvaluationStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigRuleEvaluationStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigRuleEvaluationStatusInput
  },
  output: {
    shape: DescribeConfigRuleEvaluationStatusOutput
  },
  errors: [
    {
      shape: NoSuchConfigRuleException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
