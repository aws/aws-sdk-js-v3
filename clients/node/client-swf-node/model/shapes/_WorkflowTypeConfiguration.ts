import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowTypeConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    defaultTaskStartToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    defaultExecutionStartToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    defaultTaskList: {
      shape: _TaskList
    },
    defaultTaskPriority: {
      shape: {
        type: "string"
      }
    },
    defaultChildPolicy: {
      shape: {
        type: "string"
      }
    },
    defaultLambdaRole: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
