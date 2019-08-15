import { GetComplianceSummaryByConfigRuleInput } from "../shapes/GetComplianceSummaryByConfigRuleInput";
import { GetComplianceSummaryByConfigRuleOutput } from "../shapes/GetComplianceSummaryByConfigRuleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
