import { _ClientVpnSecurityGroupIdSet } from "./_ClientVpnSecurityGroupIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplySecurityGroupsToClientVpnTargetNetworkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroupIds: {
      shape: _ClientVpnSecurityGroupIdSet,
      locationName: "securityGroupIds"
    }
  }
};
