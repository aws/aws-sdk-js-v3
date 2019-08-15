import { _QueryArgProfileList } from "./_QueryArgProfileList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryArgProfiles: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _QueryArgProfileList
    }
  }
};
