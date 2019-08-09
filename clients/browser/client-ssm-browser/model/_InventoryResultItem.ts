import { _InventoryItemEntryList } from "./_InventoryItemEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryResultItem: _Structure_ = {
  type: "structure",
  required: ["TypeName", "SchemaVersion", "Content"],
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
    }
  }
};
