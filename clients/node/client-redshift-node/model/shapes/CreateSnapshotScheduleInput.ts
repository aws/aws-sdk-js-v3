import { _ScheduleDefinitionList } from "./_ScheduleDefinitionList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotScheduleInput: _Structure_ = {
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
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    NextInvocations: {
      shape: {
        type: "integer"
      }
    }
  }
};
