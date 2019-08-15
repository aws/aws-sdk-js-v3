import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFlowLogsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceIds", "ResourceType", "TrafficType"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DeliverLogsPermissionArn: {
      shape: {
        type: "string"
      }
    },
    LogGroupName: {
      shape: {
        type: "string"
      }
    },
    ResourceIds: {
      shape: _ValueStringList,
      locationName: "ResourceId"
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    TrafficType: {
      shape: {
        type: "string"
      }
    },
    LogDestinationType: {
      shape: {
        type: "string"
      }
    },
    LogDestination: {
      shape: {
        type: "string"
      }
    }
  }
};
