import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterAssociatedToSchedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ScheduleAssociationState: {
      shape: {
        type: "string"
      }
    }
  }
};
