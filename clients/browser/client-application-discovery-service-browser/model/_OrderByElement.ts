import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrderByElement: _Structure_ = {
  type: "structure",
  required: ["fieldName"],
  members: {
    fieldName: {
      shape: {
        type: "string"
      }
    },
    sortOrder: {
      shape: {
        type: "string"
      }
    }
  }
};
