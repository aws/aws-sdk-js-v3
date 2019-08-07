import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagQueueInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "Tags"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagMap
    }
  }
};
