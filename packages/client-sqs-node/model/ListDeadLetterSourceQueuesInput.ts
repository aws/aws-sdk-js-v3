import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeadLetterSourceQueuesInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
