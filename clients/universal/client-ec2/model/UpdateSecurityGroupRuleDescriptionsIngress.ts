import { UpdateSecurityGroupRuleDescriptionsIngressInput } from "./UpdateSecurityGroupRuleDescriptionsIngressInput";
import { UpdateSecurityGroupRuleDescriptionsIngressOutput } from "./UpdateSecurityGroupRuleDescriptionsIngressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSecurityGroupRuleDescriptionsIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSecurityGroupRuleDescriptionsIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSecurityGroupRuleDescriptionsIngressInput
  },
  output: {
    shape: UpdateSecurityGroupRuleDescriptionsIngressOutput
  },
  errors: []
};
