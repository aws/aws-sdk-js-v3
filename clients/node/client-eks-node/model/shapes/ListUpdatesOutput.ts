import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUpdatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    updateIds: {
      shape: _StringList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
