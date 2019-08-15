import { _Task } from "./_Task";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const NotifyMigrationTaskStateInput: _Structure_ = {
  type: "structure",
  required: [
    "ProgressUpdateStream",
    "MigrationTaskName",
    "Task",
    "UpdateDateTime",
    "NextUpdateSeconds"
  ],
  members: {
    ProgressUpdateStream: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MigrationTaskName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Task: {
      shape: _Task
    },
    UpdateDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    NextUpdateSeconds: {
      shape: {
        type: "integer"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
