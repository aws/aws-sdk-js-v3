import { _QueueReference } from "./_QueueReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Dimensions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Queue: {
      shape: _QueueReference
    },
    Channel: {
      shape: {
        type: "string"
      }
    }
  }
};
