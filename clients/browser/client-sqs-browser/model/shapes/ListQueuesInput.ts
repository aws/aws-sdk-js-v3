import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueuesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QueueNamePrefix: {
      shape: {
        type: "string"
      }
    }
  }
};
