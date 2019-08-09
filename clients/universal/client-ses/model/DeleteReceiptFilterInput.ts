import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteReceiptFilterInput: _Structure_ = {
  type: "structure",
  required: ["FilterName"],
  members: {
    FilterName: {
      shape: {
        type: "string"
      }
    }
  }
};
