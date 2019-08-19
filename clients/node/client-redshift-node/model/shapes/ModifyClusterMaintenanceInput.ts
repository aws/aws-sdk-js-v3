import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterMaintenanceInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DeferMaintenance: {
      shape: {
        type: "boolean"
      }
    },
    DeferMaintenanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DeferMaintenanceStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    DeferMaintenanceEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    DeferMaintenanceDuration: {
      shape: {
        type: "integer"
      }
    }
  }
};
