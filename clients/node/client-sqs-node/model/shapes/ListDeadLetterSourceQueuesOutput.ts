import { _QueueUrlList } from "./_QueueUrlList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeadLetterSourceQueuesOutput: _Structure_ = {
  type: "structure",
  required: ["queueUrls"],
  members: {
    queueUrls: {
      shape: _QueueUrlList
    }
  }
};
