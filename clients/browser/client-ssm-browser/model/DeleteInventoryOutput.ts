import { _InventoryDeletionSummary } from "./_InventoryDeletionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInventoryOutput: _Structure_ = {
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
    DeletionSummary: {
      shape: _InventoryDeletionSummary
    }
  }
};
