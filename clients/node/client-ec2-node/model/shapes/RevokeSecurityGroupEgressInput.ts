import { _IpPermissionList } from "./_IpPermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeSecurityGroupEgressInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    IpPermissions: {
      shape: _IpPermissionList,
      locationName: "ipPermissions"
    },
    CidrIp: {
      shape: {
        type: "string"
      },
      locationName: "cidrIp"
    },
    FromPort: {
      shape: {
        type: "integer"
      },
      locationName: "fromPort"
    },
    IpProtocol: {
      shape: {
        type: "string"
      },
      locationName: "ipProtocol"
    },
    ToPort: {
      shape: {
        type: "integer"
      },
      locationName: "toPort"
    },
    SourceSecurityGroupName: {
      shape: {
        type: "string"
      },
      locationName: "sourceSecurityGroupName"
    },
    SourceSecurityGroupOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "sourceSecurityGroupOwnerId"
    }
  }
};
