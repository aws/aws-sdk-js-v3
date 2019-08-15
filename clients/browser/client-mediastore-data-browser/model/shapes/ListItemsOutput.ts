import { _ItemList } from "./_ItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListItemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: _ItemList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
