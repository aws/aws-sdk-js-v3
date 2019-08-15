import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceName"],
  members: {
    ResourceName: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList
    }
  }
};
