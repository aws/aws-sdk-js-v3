import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFlowExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["systemInstanceId"],
  members: {
    systemInstanceId: {
      shape: {
        type: "string"
      }
    },
    flowExecutionId: {
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
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
