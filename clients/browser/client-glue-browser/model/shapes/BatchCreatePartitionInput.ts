import { _PartitionInputList } from "./_PartitionInputList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchCreatePartitionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "PartitionInputList"],
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
    PartitionInputList: {
      shape: _PartitionInputList
    }
  }
};
