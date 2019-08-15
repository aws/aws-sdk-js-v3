import { _InventoryItemAttributeList } from "./_InventoryItemAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryItemSchema: _Structure_ = {
  type: "structure",
  required: ["TypeName", "Attributes"],
  members: {
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _InventoryItemAttributeList
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    }
  }
};
