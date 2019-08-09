import { _TypeList } from "./_TypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    types: {
      shape: _TypeList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
