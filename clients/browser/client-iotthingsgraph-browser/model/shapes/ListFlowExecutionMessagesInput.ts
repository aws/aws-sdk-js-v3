import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFlowExecutionMessagesInput: _Structure_ = {
  type: "structure",
  required: ["flowExecutionId"],
  members: {
    flowExecutionId: {
      shape: {
        type: "string"
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
