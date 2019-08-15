import { _MethodsList } from "./_MethodsList";
import { _CachedMethods } from "./_CachedMethods";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AllowedMethods: _Structure_ = {
  type: "structure",
  required: ["Quantity", "Items"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _MethodsList
    },
    CachedMethods: {
      shape: _CachedMethods
    }
  }
};
