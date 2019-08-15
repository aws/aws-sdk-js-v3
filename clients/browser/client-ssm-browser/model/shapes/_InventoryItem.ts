import { _InventoryItemEntryList } from "./_InventoryItemEntryList";
import { _InventoryItemContentContext } from "./_InventoryItemContentContext";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryItem: _Structure_ = {
  type: "structure",
  required: ["TypeName", "SchemaVersion", "CaptureTime"],
  members: {
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SchemaVersion: {
      shape: {
        type: "string"
      }
    },
    CaptureTime: {
      shape: {
        type: "string"
      }
    },
    ContentHash: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: _InventoryItemEntryList
    },
    Context: {
      shape: _InventoryItemContentContext
    }
  }
};
