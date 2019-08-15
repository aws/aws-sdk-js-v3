import { _SuggesterStatusList } from "./_SuggesterStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSuggestersOutput: _Structure_ = {
  type: "structure",
  required: ["Suggesters"],
  members: {
    Suggesters: {
      shape: _SuggesterStatusList
    }
  }
};
