import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssociatedFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _StringList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
