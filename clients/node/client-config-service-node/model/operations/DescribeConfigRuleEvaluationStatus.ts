import { DescribeConfigRuleEvaluationStatusInput } from "../shapes/DescribeConfigRuleEvaluationStatusInput";
import { DescribeConfigRuleEvaluationStatusOutput } from "../shapes/DescribeConfigRuleEvaluationStatusOutput";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
