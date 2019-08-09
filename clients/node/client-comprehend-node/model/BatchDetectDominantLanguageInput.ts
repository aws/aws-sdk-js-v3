import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectDominantLanguageInput: _Structure_ = {
  type: "structure",
  required: ["TextList"],
  members: {
    TextList: {
      shape: _StringList
    }
  }
};
