import { DescribeClientVpnAuthorizationRulesInput } from "./DescribeClientVpnAuthorizationRulesInput";
import { DescribeClientVpnAuthorizationRulesOutput } from "./DescribeClientVpnAuthorizationRulesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeClientVpnAuthorizationRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClientVpnAuthorizationRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClientVpnAuthorizationRulesInput
  },
  output: {
    shape: DescribeClientVpnAuthorizationRulesOutput
  },
  errors: []
};
