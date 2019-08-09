import { _BoundedPartitionValueList } from "./_BoundedPartitionValueList";
import { _PartitionInput } from "./_PartitionInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePartitionInput: _Structure_ = {
  type: "structure",
  required: [
    "DatabaseName",
    "TableName",
    "PartitionValueList",
    "PartitionInput"
  ],
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
    PartitionValueList: {
      shape: _BoundedPartitionValueList
    },
    PartitionInput: {
      shape: _PartitionInput
    }
  }
};
