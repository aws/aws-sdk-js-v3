import { _CookieNameList } from "./_CookieNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CookieNames: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _CookieNameList
    }
  }
};
