import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForDecisionTaskInput: _Structure_ = {
  type: "structure",
  required: ["domain", "taskList"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    taskList: {
      shape: _TaskList
    },
    identity: {
      shape: {
        type: "string"
      }
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    },
    maximumPageSize: {
      shape: {
        type: "integer"
      }
    },
    reverseOrder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
