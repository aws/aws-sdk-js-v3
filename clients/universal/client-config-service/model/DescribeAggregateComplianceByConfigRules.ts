import { DescribeAggregateComplianceByConfigRulesInput } from "./DescribeAggregateComplianceByConfigRulesInput";
import { DescribeAggregateComplianceByConfigRulesOutput } from "./DescribeAggregateComplianceByConfigRulesOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
