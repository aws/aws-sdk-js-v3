import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryFilter: _Structure_ = {
  type: "structure",
  required: ["Name", "Condition"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Condition: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
