import { _QueueUrlList } from "./_QueueUrlList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueuesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QueueUrls: {
      shape: _QueueUrlList
    }
  }
};
