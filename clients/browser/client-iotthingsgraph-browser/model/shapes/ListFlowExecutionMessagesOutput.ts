import { _FlowExecutionMessages } from "./_FlowExecutionMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFlowExecutionMessagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    messages: {
      shape: _FlowExecutionMessages
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
