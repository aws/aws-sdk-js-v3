import { _InventoryItemEntryList } from "./_InventoryItemEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInventoryEntriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceId: {
      shape: {
        type: "string"
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
    Entries: {
      shape: _InventoryItemEntryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
