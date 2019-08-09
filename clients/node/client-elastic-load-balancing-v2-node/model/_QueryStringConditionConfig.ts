import { _QueryStringKeyValuePairList } from "./_QueryStringKeyValuePairList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryStringConditionConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Values: {
      shape: _QueryStringKeyValuePairList
    }
  }
};
