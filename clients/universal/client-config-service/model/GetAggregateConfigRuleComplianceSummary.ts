import { GetAggregateConfigRuleComplianceSummaryInput } from "./GetAggregateConfigRuleComplianceSummaryInput";
import { GetAggregateConfigRuleComplianceSummaryOutput } from "./GetAggregateConfigRuleComplianceSummaryOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAggregateConfigRuleComplianceSummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAggregateConfigRuleComplianceSummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAggregateConfigRuleComplianceSummaryInput
  },
  output: {
    shape: GetAggregateConfigRuleComplianceSummaryOutput
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
