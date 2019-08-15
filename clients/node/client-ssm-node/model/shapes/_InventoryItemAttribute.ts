import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryItemAttribute: _Structure_ = {
  type: "structure",
  required: ["Name", "DataType"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    DataType: {
      shape: {
        type: "string"
      }
    }
  }
};
