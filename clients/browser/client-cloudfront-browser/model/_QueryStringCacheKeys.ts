import { _QueryStringCacheKeysList } from "./_QueryStringCacheKeysList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryStringCacheKeys: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _QueryStringCacheKeysList
    }
  }
};
