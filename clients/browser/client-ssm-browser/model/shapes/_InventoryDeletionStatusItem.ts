import { _InventoryDeletionSummary } from "./_InventoryDeletionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryDeletionStatusItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeletionId: {
      shape: {
        type: "string"
      }
    },
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeletionStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastStatus: {
      shape: {
        type: "string"
      }
    },
    LastStatusMessage: {
      shape: {
        type: "string"
      }
    },
    DeletionSummary: {
      shape: _InventoryDeletionSummary
    },
    LastStatusUpdateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
