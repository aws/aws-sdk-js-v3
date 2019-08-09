import { _Listeners } from "./_Listeners";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListListenersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Listeners: {
      shape: _Listeners
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
