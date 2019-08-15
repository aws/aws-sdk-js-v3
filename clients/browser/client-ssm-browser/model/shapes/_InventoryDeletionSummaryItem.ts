import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryDeletionSummaryItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Version: {
      shape: {
        type: "string"
      }
    },
    Count: {
      shape: {
        type: "integer"
      }
    },
    RemainingCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
