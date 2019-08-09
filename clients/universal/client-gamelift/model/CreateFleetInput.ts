import { _StringList } from "./_StringList";
import { _IpPermissionsList } from "./_IpPermissionsList";
import { _RuntimeConfiguration } from "./_RuntimeConfiguration";
import { _ResourceCreationLimitPolicy } from "./_ResourceCreationLimitPolicy";
import { _MetricGroupList } from "./_MetricGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetInput: _Structure_ = {
  type: "structure",
  required: ["Name", "EC2InstanceType"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BuildId: {
      shape: {
        type: "string"
      }
    },
    ScriptId: {
      shape: {
        type: "string"
      }
    },
    ServerLaunchPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServerLaunchParameters: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogPaths: {
      shape: _StringList
    },
    EC2InstanceType: {
      shape: {
        type: "string"
      }
    },
    EC2InboundPermissions: {
      shape: _IpPermissionsList
    },
    NewGameSessionProtectionPolicy: {
      shape: {
        type: "string"
      }
    },
    RuntimeConfiguration: {
      shape: _RuntimeConfiguration
    },
    ResourceCreationLimitPolicy: {
      shape: _ResourceCreationLimitPolicy
    },
    MetricGroups: {
      shape: _MetricGroupList
    },
    PeerVpcAwsAccountId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PeerVpcId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetType: {
      shape: {
        type: "string"
      }
    },
    InstanceRoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
