import { _ConsumerList } from "./_ConsumerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamConsumersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Consumers: {
      shape: _ConsumerList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
