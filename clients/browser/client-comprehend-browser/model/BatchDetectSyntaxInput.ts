import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectSyntaxInput: _Structure_ = {
  type: "structure",
  required: ["TextList", "LanguageCode"],
  members: {
    TextList: {
      shape: _StringList
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    }
  }
};
