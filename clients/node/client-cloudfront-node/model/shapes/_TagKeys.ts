import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagKeys: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: _TagKeyList
    }
  }
};
