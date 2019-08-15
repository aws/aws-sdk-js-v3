import { _idList } from "./_idList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const QueryObjectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ids: {
      shape: _idList
    },
    marker: {
      shape: {
        type: "string"
      }
    },
    hasMoreResults: {
      shape: {
        type: "boolean"
      }
    }
  }
};
