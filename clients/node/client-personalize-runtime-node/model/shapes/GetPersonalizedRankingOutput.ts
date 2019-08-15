import { _ItemList } from "./_ItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPersonalizedRankingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    personalizedRanking: {
      shape: _ItemList
    }
  }
};
