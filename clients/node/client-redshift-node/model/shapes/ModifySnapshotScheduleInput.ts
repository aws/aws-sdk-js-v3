import { _ScheduleDefinitionList } from "./_ScheduleDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifySnapshotScheduleInput: _Structure_ = {
  type: "structure",
  required: ["ScheduleIdentifier", "ScheduleDefinitions"],
  members: {
    ScheduleIdentifier: {
      shape: {
        type: "string"
      }
    },
    ScheduleDefinitions: {
      shape: _ScheduleDefinitionList
    }
  }
};
