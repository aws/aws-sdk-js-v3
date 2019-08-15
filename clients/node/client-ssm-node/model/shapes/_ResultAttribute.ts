import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultAttribute: _Structure_ = {
  type: "structure",
  required: ["TypeName"],
  members: {
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
