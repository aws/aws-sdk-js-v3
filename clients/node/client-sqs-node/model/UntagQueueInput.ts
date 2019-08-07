import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagQueueInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "TagKeys"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
