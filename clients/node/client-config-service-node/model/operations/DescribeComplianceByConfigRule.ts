import { DescribeComplianceByConfigRuleInput } from "../shapes/DescribeComplianceByConfigRuleInput";
import { DescribeComplianceByConfigRuleOutput } from "../shapes/DescribeComplianceByConfigRuleOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeComplianceByConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComplianceByConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeComplianceByConfigRuleInput
  },
  output: {
    shape: DescribeComplianceByConfigRuleOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: NoSuchConfigRuleException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
