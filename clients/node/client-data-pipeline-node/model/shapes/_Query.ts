import { _SelectorList } from "./_SelectorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Query: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    selectors: {
      shape: _SelectorList
    }
  }
};
