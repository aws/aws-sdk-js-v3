import { _ResourceIdentifier } from "./_ResourceIdentifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditFindingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    checkName: {
      shape: {
        type: "string"
      }
    },
    resourceIdentifier: {
      shape: _ResourceIdentifier
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
