import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterSnapshotScheduleInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ScheduleIdentifier: {
      shape: {
        type: "string"
      }
    },
    DisassociateSchedule: {
      shape: {
        type: "boolean"
      }
    }
  }
};
