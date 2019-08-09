import { _PathList } from "./_PathList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Paths: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _PathList
    }
  }
};
