import { UpdateSecurityGroupRuleDescriptionsEgressInput } from "./UpdateSecurityGroupRuleDescriptionsEgressInput";
import { UpdateSecurityGroupRuleDescriptionsEgressOutput } from "./UpdateSecurityGroupRuleDescriptionsEgressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSecurityGroupRuleDescriptionsEgress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSecurityGroupRuleDescriptionsEgress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSecurityGroupRuleDescriptionsEgressInput
  },
  output: {
    shape: UpdateSecurityGroupRuleDescriptionsEgressOutput
  },
  errors: []
};
