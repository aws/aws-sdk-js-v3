import { _Task } from "./_Task";
import { _LatestResourceAttributeList } from "./_LatestResourceAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MigrationTask: _Structure_ = {
  type: "structure",
  required: [],
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
    ResourceAttributeList: {
      shape: _LatestResourceAttributeList
    }
  }
};
