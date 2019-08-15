import { _OriginList } from "./_OriginList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Origins: _Structure_ = {
  type: "structure",
  required: ["Quantity", "Items"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _OriginList
    }
  }
};
