import { _InventoryDeletionSummaryItems } from "./_InventoryDeletionSummaryItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryDeletionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalCount: {
      shape: {
        type: "integer"
      }
    },
    RemainingCount: {
      shape: {
        type: "integer"
      }
    },
    SummaryItems: {
      shape: _InventoryDeletionSummaryItems
    }
  }
};
