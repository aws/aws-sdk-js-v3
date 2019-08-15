import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLogStreamInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "logStreamName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
