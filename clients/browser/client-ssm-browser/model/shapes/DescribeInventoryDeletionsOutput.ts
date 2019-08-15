import { _InventoryDeletionsList } from "./_InventoryDeletionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInventoryDeletionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InventoryDeletions: {
      shape: _InventoryDeletionsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
