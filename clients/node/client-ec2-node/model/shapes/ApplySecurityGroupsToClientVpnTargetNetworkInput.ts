import { _ClientVpnSecurityGroupIdSet } from "./_ClientVpnSecurityGroupIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplySecurityGroupsToClientVpnTargetNetworkInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "VpcId", "SecurityGroupIds"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _ClientVpnSecurityGroupIdSet,
      locationName: "SecurityGroupId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
