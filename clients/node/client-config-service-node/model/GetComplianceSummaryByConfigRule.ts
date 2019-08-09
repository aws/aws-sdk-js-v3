import { GetComplianceSummaryByConfigRuleInput } from "./GetComplianceSummaryByConfigRuleInput";
import { GetComplianceSummaryByConfigRuleOutput } from "./GetComplianceSummaryByConfigRuleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetComplianceSummaryByConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetComplianceSummaryByConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetComplianceSummaryByConfigRuleInput
  },
  output: {
    shape: GetComplianceSummaryByConfigRuleOutput
  },
  errors: []
};
