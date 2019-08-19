import { _KeyPairIdList } from "./_KeyPairIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyPairIds: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _KeyPairIdList
    }
  }
};
