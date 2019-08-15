import { _IpPermissionList } from "./_IpPermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSecurityGroupRuleDescriptionsIngressInput: _Structure_ = {
  type: "structure",
  required: ["IpPermissions"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    GroupId: {
      shape: {
        type: "string"
      }
    },
    GroupName: {
      shape: {
        type: "string"
      }
    },
    IpPermissions: {
      shape: _IpPermissionList
    }
  }
};
