import { _IpPermissionList } from "./_IpPermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AuthorizeSecurityGroupIngressInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrIp: {
      shape: {
        type: "string"
      }
    },
    FromPort: {
      shape: {
        type: "integer"
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
    },
    IpProtocol: {
      shape: {
        type: "string"
      }
    },
    SourceSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    SourceSecurityGroupOwnerId: {
      shape: {
        type: "string"
      }
    },
    ToPort: {
      shape: {
        type: "integer"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
