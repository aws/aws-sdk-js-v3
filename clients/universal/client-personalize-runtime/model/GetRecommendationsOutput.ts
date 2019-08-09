import { _ItemList } from "./_ItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRecommendationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    itemList: {
      shape: _ItemList
    }
  }
};
