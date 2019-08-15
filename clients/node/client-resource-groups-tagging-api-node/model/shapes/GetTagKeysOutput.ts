import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PaginationToken: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
