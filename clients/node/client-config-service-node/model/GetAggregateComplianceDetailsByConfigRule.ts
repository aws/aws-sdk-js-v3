import { GetAggregateComplianceDetailsByConfigRuleInput } from "./GetAggregateComplianceDetailsByConfigRuleInput";
import { GetAggregateComplianceDetailsByConfigRuleOutput } from "./GetAggregateComplianceDetailsByConfigRuleOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
