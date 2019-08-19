import { GetAggregateConfigRuleComplianceSummaryInput } from "../shapes/GetAggregateConfigRuleComplianceSummaryInput";
import { GetAggregateConfigRuleComplianceSummaryOutput } from "../shapes/GetAggregateConfigRuleComplianceSummaryOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
