import { DescribeComplianceByConfigRuleInput } from "./DescribeComplianceByConfigRuleInput";
import { DescribeComplianceByConfigRuleOutput } from "./DescribeComplianceByConfigRuleOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
