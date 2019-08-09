import { _OriginCustomHeadersList } from "./_OriginCustomHeadersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomHeaders: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _OriginCustomHeadersList
    }
  }
};
