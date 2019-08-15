import { _ContentTypeProfileList } from "./_ContentTypeProfileList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContentTypeProfiles: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _ContentTypeProfileList
    }
  }
};
