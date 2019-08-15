import { _TestEventMessages } from "./_TestEventMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestMetricFilterInput: _Structure_ = {
  type: "structure",
  required: ["filterPattern", "logEventMessages"],
  members: {
    filterPattern: {
      shape: {
        type: "string"
      }
    },
    logEventMessages: {
      shape: _TestEventMessages
    }
  }
};
