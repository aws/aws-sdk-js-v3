import { _SubnetIds } from "./_SubnetIds";
import { _DnsIpAddresses } from "./_DnsIpAddresses";
import { _DefaultWorkspaceCreationProperties } from "./_DefaultWorkspaceCreationProperties";
import { _IpGroupIdList } from "./_IpGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspaceDirectory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    Alias: {
      shape: {
        type: "string"
      }
    },
    DirectoryName: {
      shape: {
        type: "string"
      }
    },
    RegistrationCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    DnsIpAddresses: {
      shape: _DnsIpAddresses
    },
    CustomerUserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IamRoleId: {
      shape: {
        type: "string"
      }
    },
    DirectoryType: {
      shape: {
        type: "string"
      }
    },
    WorkspaceSecurityGroupId: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    WorkspaceCreationProperties: {
      shape: _DefaultWorkspaceCreationProperties
    },
    ipGroupIds: {
      shape: _IpGroupIdList
    }
  }
};
