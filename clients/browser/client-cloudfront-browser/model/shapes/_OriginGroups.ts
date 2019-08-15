import { _OriginGroupList } from "./_OriginGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginGroups: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _OriginGroupList
    }
  }
};
