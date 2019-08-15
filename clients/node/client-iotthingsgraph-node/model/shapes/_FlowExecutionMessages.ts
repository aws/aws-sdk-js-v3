import { List as _List_ } from "@aws-sdk/types";
import { _FlowExecutionMessage } from "./_FlowExecutionMessage";

export const _FlowExecutionMessages: _List_ = {
  type: "list",
  member: {
    shape: _FlowExecutionMessage
  }
};
