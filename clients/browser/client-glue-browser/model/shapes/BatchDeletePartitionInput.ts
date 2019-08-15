import { _BatchDeletePartitionValueList } from "./_BatchDeletePartitionValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeletePartitionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "PartitionsToDelete"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PartitionsToDelete: {
      shape: _BatchDeletePartitionValueList
    }
  }
};
