import { _MethodsList } from "./_MethodsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CachedMethods: _Structure_ = {
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
    }
  }
};
