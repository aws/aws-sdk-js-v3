import { GetAggregateComplianceDetailsByConfigRuleInput } from "../shapes/GetAggregateComplianceDetailsByConfigRuleInput";
import { GetAggregateComplianceDetailsByConfigRuleOutput } from "../shapes/GetAggregateComplianceDetailsByConfigRuleOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAggregateComplianceDetailsByConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAggregateComplianceDetailsByConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAggregateComplianceDetailsByConfigRuleInput
  },
  output: {
    shape: GetAggregateComplianceDetailsByConfigRuleOutput
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
