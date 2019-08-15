import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConnectionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionName"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConnectionName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
