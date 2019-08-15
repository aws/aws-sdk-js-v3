import { _ClientVpnAuthorizationRuleStatus } from "./_ClientVpnAuthorizationRuleStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AuthorizeClientVpnIngressOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: _ClientVpnAuthorizationRuleStatus,
      locationName: "status"
    }
  }
};
