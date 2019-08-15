import { _BatchGetPartitionValueList } from "./_BatchGetPartitionValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetPartitionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "PartitionsToGet"],
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
    PartitionsToGet: {
      shape: _BatchGetPartitionValueList
    }
  }
};
