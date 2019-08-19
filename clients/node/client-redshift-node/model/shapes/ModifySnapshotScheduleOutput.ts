import { _ScheduleDefinitionList } from "./_ScheduleDefinitionList";
import { _TagList } from "./_TagList";
import { _ScheduledSnapshotTimeList } from "./_ScheduledSnapshotTimeList";
import { _AssociatedClusterList } from "./_AssociatedClusterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifySnapshotScheduleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduleDefinitions: {
      shape: _ScheduleDefinitionList
    },
    ScheduleIdentifier: {
      shape: {
        type: "string"
      }
    },
    ScheduleDescription: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    NextInvocations: {
      shape: _ScheduledSnapshotTimeList
    },
    AssociatedClusterCount: {
      shape: {
        type: "integer"
      }
    },
    AssociatedClusters: {
      shape: _AssociatedClusterList
    }
  }
};
