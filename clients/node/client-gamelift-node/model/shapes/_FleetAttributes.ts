import { _StringList } from "./_StringList";
import { _ResourceCreationLimitPolicy } from "./_ResourceCreationLimitPolicy";
import { _MetricGroupList } from "./_MetricGroupList";
import { _FleetActionList } from "./_FleetActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    FleetArn: {
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
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TerminationTime: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
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
    NewGameSessionProtectionPolicy: {
      shape: {
        type: "string"
      }
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    },
    ResourceCreationLimitPolicy: {
      shape: _ResourceCreationLimitPolicy
    },
    MetricGroups: {
      shape: _MetricGroupList
    },
    StoppedActions: {
      shape: _FleetActionList
    },
    InstanceRoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
