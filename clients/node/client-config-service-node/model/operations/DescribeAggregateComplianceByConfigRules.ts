import { DescribeAggregateComplianceByConfigRulesInput } from "../shapes/DescribeAggregateComplianceByConfigRulesInput";
import { DescribeAggregateComplianceByConfigRulesOutput } from "../shapes/DescribeAggregateComplianceByConfigRulesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAggregateComplianceByConfigRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAggregateComplianceByConfigRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAggregateComplianceByConfigRulesInput
  },
  output: {
    shape: DescribeAggregateComplianceByConfigRulesOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: NoSuchConfigurationAggregatorException
    }
  ]
};
